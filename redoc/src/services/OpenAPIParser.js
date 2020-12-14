"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const utils_1 = require("../utils/");
const JsonPointer_1 = require("../utils/JsonPointer");
const openapi_1 = require("../utils/openapi");
const MarkdownRenderer_1 = require("./MarkdownRenderer");
const RedocNormalizedOptions_1 = require("./RedocNormalizedOptions");
/**
 * Helper class to keep track of visited references to avoid
 * endless recursion because of circular refs
 */
class RefCounter {
    constructor() {
        this._counter = {};
    }
    reset() {
        this._counter = {};
    }
    visit(ref) {
        this._counter[ref] = this._counter[ref] ? this._counter[ref] + 1 : 1;
    }
    exit(ref) {
        this._counter[ref] = this._counter[ref] && this._counter[ref] - 1;
    }
    visited(ref) {
        return !!this._counter[ref];
    }
}
/**
 * Loads and keeps spec. Provides raw spec operations
 */
class OpenAPIParser {
    constructor(spec, specUrl, options = new RedocNormalizedOptions_1.RedocNormalizedOptions({})) {
        this.options = options;
        this._refCounter = new RefCounter();
        /**
         * get spec part by JsonPointer ($ref)
         */
        this.byRef = (ref) => {
            let res;
            if (!this.spec) {
                return;
            }
            if (ref.charAt(0) !== '#') {
                ref = '#' + ref;
            }
            ref = decodeURIComponent(ref);
            try {
                res = JsonPointer_1.JsonPointer.get(this.spec, ref);
            }
            catch (e) {
                // do nothing
            }
            return res || {};
        };
        this.validate(spec);
        this.preprocess(spec);
        this.spec = spec;
        this.mergeRefs = new Set();
        const href = utils_1.IS_BROWSER ? window.location.href : '';
        if (typeof specUrl === 'string') {
            this.specUrl = url_1.resolve(href, specUrl);
        }
    }
    validate(spec) {
        if (spec.openapi === undefined) {
            throw new Error('Document must be valid OpenAPI 3.0.0 definition');
        }
    }
    preprocess(spec) {
        if (!this.options.noAutoAuth &&
            spec.info &&
            spec.components &&
            spec.components.securitySchemes) {
            // Automatically inject Authentication section with SecurityDefinitions component
            const description = spec.info.description || '';
            if (!MarkdownRenderer_1.MarkdownRenderer.containsComponent(description, openapi_1.SECURITY_DEFINITIONS_COMPONENT_NAME) &&
                !MarkdownRenderer_1.MarkdownRenderer.containsComponent(description, openapi_1.SECURITY_DEFINITIONS_JSX_NAME)) {
                const comment = MarkdownRenderer_1.buildComponentComment(openapi_1.SECURITY_DEFINITIONS_COMPONENT_NAME);
                spec.info.description = utils_1.appendToMdHeading(description, 'Authentication', comment);
            }
        }
    }
    /**
     * checks if the objectt is OpenAPI reference (containts $ref property)
     */
    isRef(obj) {
        if (!obj) {
            return false;
        }
        return obj.$ref !== undefined && obj.$ref !== null;
    }
    /**
     * resets visited enpoints. should be run after
     */
    resetVisited() {
        if (process.env.NODE_ENV !== 'production') {
            // check in dev mode
            for (const k in this._refCounter._counter) {
                if (this._refCounter._counter[k] > 0) {
                    console.warn('Not exited reference: ' + k);
                }
            }
        }
        this._refCounter = new RefCounter();
    }
    exitRef(ref) {
        if (!this.isRef(ref)) {
            return;
        }
        this._refCounter.exit(ref.$ref);
    }
    /**
     * Resolve given reference object or return as is if it is not a reference
     * @param obj object to dereference
     * @param forceCircular whether to dereference even if it is cirular ref
     */
    deref(obj, forceCircular = false) {
        if (this.isRef(obj)) {
            const resolved = this.byRef(obj.$ref);
            const visited = this._refCounter.visited(obj.$ref);
            this._refCounter.visit(obj.$ref);
            if (visited && !forceCircular) {
                // circular reference detected
                // tslint:disable-next-line
                return Object.assign({}, resolved, { 'x-circular-ref': true });
            }
            // deref again in case one more $ref is here
            if (this.isRef(resolved)) {
                const res = this.deref(resolved);
                this.exitRef(resolved);
                return res;
            }
            return resolved;
        }
        return obj;
    }
    shalowDeref(obj) {
        if (this.isRef(obj)) {
            return this.byRef(obj.$ref);
        }
        return obj;
    }
    /**
     * Merge allOf contsraints.
     * @param schema schema with allOF
     * @param $ref pointer of the schema
     * @param forceCircular whether to dereference children even if it is a cirular ref
     */
    mergeAllOf(schema, $ref, forceCircular = false, used$Refs = new Set()) {
        if ($ref) {
            used$Refs.add($ref);
        }
        schema = this.hoistOneOfs(schema);
        if (schema.allOf === undefined) {
            return schema;
        }
        let receiver = Object.assign(Object.assign({}, schema), { allOf: undefined, parentRefs: [], title: schema.title || (openapi_1.isNamedDefinition($ref) ? JsonPointer_1.JsonPointer.baseName($ref) : undefined) });
        // avoid mutating inner objects
        if (receiver.properties !== undefined && typeof receiver.properties === 'object') {
            receiver.properties = Object.assign({}, receiver.properties);
        }
        if (receiver.items !== undefined && typeof receiver.items === 'object') {
            receiver.items = Object.assign({}, receiver.items);
        }
        const allOfSchemas = schema.allOf
            .map(subSchema => {
            if (subSchema && subSchema.$ref && used$Refs.has(subSchema.$ref)) {
                return undefined;
            }
            const resolved = this.deref(subSchema, forceCircular);
            const subRef = subSchema.$ref || undefined;
            const subMerged = this.mergeAllOf(resolved, subRef, forceCircular, used$Refs);
            receiver.parentRefs.push(...(subMerged.parentRefs || []));
            return {
                $ref: subRef,
                schema: subMerged,
            };
        })
            .filter(child => child !== undefined);
        for (const { $ref: subSchemaRef, schema: subSchema } of allOfSchemas) {
            if (receiver.type !== subSchema.type &&
                receiver.type !== undefined &&
                subSchema.type !== undefined) {
                throw new Error(`Incompatible types in allOf at "${$ref}"`);
            }
            if (subSchema.type !== undefined) {
                receiver.type = subSchema.type;
            }
            if (subSchema.properties !== undefined) {
                receiver.properties = receiver.properties || {};
                for (const prop in subSchema.properties) {
                    if (!receiver.properties[prop]) {
                        receiver.properties[prop] = subSchema.properties[prop];
                    }
                    else {
                        // merge inner properties
                        receiver.properties[prop] = this.mergeAllOf({ allOf: [receiver.properties[prop], subSchema.properties[prop]] }, $ref + '/properties/' + prop);
                    }
                }
            }
            if (subSchema.items !== undefined) {
                receiver.items = receiver.items || {};
                // merge inner properties
                receiver.items = this.mergeAllOf({ allOf: [receiver.items, subSchema.items] }, $ref + '/items');
            }
            if (subSchema.required !== undefined) {
                receiver.required = (receiver.required || []).concat(subSchema.required);
            }
            // merge rest of constraints
            // TODO: do more intelegent merge
            receiver = Object.assign(Object.assign({}, subSchema), receiver);
            if (subSchemaRef) {
                receiver.parentRefs.push(subSchemaRef);
                if (receiver.title === undefined && openapi_1.isNamedDefinition(subSchemaRef)) {
                    // this is not so correct behaviour. comented out for now
                    // ref: https://github.com/Redocly/redoc/issues/601
                    // receiver.title = JsonPointer.baseName(subSchemaRef);
                }
            }
        }
        return receiver;
    }
    /**
     * Find all derived definitions among #/components/schemas from any of $refs
     * returns map of definition pointer to definition name
     * @param $refs array of references to find derived from
     */
    findDerived($refs) {
        const res = {};
        const schemas = (this.spec.components && this.spec.components.schemas) || {};
        for (const defName in schemas) {
            const def = this.deref(schemas[defName]);
            if (def.allOf !== undefined &&
                def.allOf.find(obj => obj.$ref !== undefined && $refs.indexOf(obj.$ref) > -1)) {
                res['#/components/schemas/' + defName] = def['x-discriminator-value'] || defName;
            }
        }
        return res;
    }
    exitParents(shema) {
        for (const parent$ref of shema.parentRefs || []) {
            this.exitRef({ $ref: parent$ref });
        }
    }
    hoistOneOfs(schema) {
        if (schema.allOf === undefined) {
            return schema;
        }
        const allOf = schema.allOf;
        for (let i = 0; i < allOf.length; i++) {
            const sub = allOf[i];
            if (Array.isArray(sub.oneOf)) {
                const beforeAllOf = allOf.slice(0, i);
                const afterAllOf = allOf.slice(i + 1);
                return {
                    oneOf: sub.oneOf.map(part => {
                        const merged = this.mergeAllOf({
                            allOf: [...beforeAllOf, part, ...afterAllOf],
                        });
                        // each oneOf should be independent so exiting all the parent refs
                        // otherwise it will cause false-positive recursive detection
                        this.exitParents(merged);
                        return merged;
                    }),
                };
            }
        }
        return schema;
    }
}
exports.OpenAPIParser = OpenAPIParser;
