"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const Field_1 = require("./Field");
const utils_1 = require("../../utils/");
const Labels_1 = require("../Labels");
// TODO: refactor this model, maybe use getters instead of copying all the values
class SchemaModel {
    /**
     * @param isChild if schema discriminator Child
     * When true forces dereferencing in allOfs even if circular
     */
    constructor(parser, schemaOrRef, pointer, options, isChild = false) {
        this.options = options;
        this.typePrefix = '';
        this.isCircular = false;
        this.activeOneOf = 0;
        this.pointer = schemaOrRef.$ref || pointer || '';
        this.rawSchema = parser.deref(schemaOrRef);
        this.schema = parser.mergeAllOf(this.rawSchema, this.pointer, isChild);
        this.init(parser, isChild);
        parser.exitRef(schemaOrRef);
        parser.exitParents(this.schema);
        if (options.showExtensions) {
            this.extensions = utils_1.extractExtensions(this.schema, options.showExtensions);
        }
    }
    /**
     * Set specified alternative schema as active
     * @param idx oneOf index
     */
    activateOneOf(idx) {
        this.activeOneOf = idx;
    }
    init(parser, isChild) {
        const schema = this.schema;
        this.isCircular = schema['x-circular-ref'];
        this.title =
            schema.title || (utils_1.isNamedDefinition(this.pointer) && utils_1.JsonPointer.baseName(this.pointer)) || '';
        this.description = schema.description || '';
        this.type = schema.type || utils_1.detectType(schema);
        this.format = schema.format;
        this.nullable = !!schema.nullable;
        this.enum = schema.enum || [];
        this.example = schema.example;
        this.deprecated = !!schema.deprecated;
        this.pattern = schema.pattern;
        this.externalDocs = schema.externalDocs;
        this.constraints = utils_1.humanizeConstraints(schema);
        this.displayType = this.type;
        this.displayFormat = this.format;
        this.isPrimitive = utils_1.isPrimitiveType(schema, this.type);
        this.default = schema.default;
        this.readOnly = !!schema.readOnly;
        this.writeOnly = !!schema.writeOnly;
        if (this.isCircular) {
            return;
        }
        if (!isChild && getDiscriminator(schema) !== undefined) {
            this.initDiscriminator(schema, parser);
            return;
        }
        if (schema.oneOf !== undefined) {
            this.initOneOf(schema.oneOf, parser);
            this.oneOfType = 'One of';
            if (schema.anyOf !== undefined) {
                console.warn(`oneOf and anyOf are not supported on the same level. Skipping anyOf at ${this.pointer}`);
            }
            return;
        }
        if (schema.anyOf !== undefined) {
            this.initOneOf(schema.anyOf, parser);
            this.oneOfType = 'Any of';
            return;
        }
        if (this.type === 'object') {
            this.fields = buildFields(parser, schema, this.pointer, this.options);
        }
        else if (this.type === 'array' && schema.items) {
            this.items = new SchemaModel(parser, schema.items, this.pointer + '/items', this.options);
            this.displayType = utils_1.pluralizeType(this.items.displayType);
            this.displayFormat = this.items.format;
            this.typePrefix = this.items.typePrefix + Labels_1.l('arrayOf');
            this.title = this.title || this.items.title;
            this.isPrimitive = this.items.isPrimitive;
            if (this.example === undefined && this.items.example !== undefined) {
                this.example = [this.items.example];
            }
            if (this.items.isPrimitive) {
                this.enum = this.items.enum;
            }
        }
    }
    initOneOf(oneOf, parser) {
        this.oneOf = oneOf.map((variant, idx) => {
            const derefVariant = parser.deref(variant);
            const merged = parser.mergeAllOf(derefVariant, this.pointer + '/oneOf/' + idx);
            // try to infer title
            const title = utils_1.isNamedDefinition(variant.$ref) && !merged.title
                ? utils_1.JsonPointer.baseName(variant.$ref)
                : merged.title;
            const schema = new SchemaModel(parser, 
            // merge base schema into each of oneOf's subschemas
            Object.assign(Object.assign({}, merged), { title, allOf: [Object.assign(Object.assign({}, this.schema), { oneOf: undefined, anyOf: undefined })] }), this.pointer + '/oneOf/' + idx, this.options);
            parser.exitRef(variant);
            // each oneOf should be independent so exiting all the parent refs
            // otherwise it will cause false-positive recursive detection
            parser.exitParents(merged);
            return schema;
        });
        this.displayType = this.oneOf
            .map(schema => {
            let name = schema.typePrefix +
                (schema.title ? `${schema.title} (${schema.displayType})` : schema.displayType);
            if (name.indexOf(' or ') > -1) {
                name = `(${name})`;
            }
            return name;
        })
            .join(' or ');
    }
    initDiscriminator(schema, parser) {
        const discriminator = getDiscriminator(schema);
        this.discriminatorProp = discriminator.propertyName;
        const derived = parser.findDerived([...(schema.parentRefs || []), this.pointer]);
        if (schema.oneOf) {
            for (const variant of schema.oneOf) {
                if (variant.$ref === undefined) {
                    continue;
                }
                const name = utils_1.JsonPointer.baseName(variant.$ref);
                derived[variant.$ref] = name;
            }
        }
        const mapping = discriminator.mapping || {};
        for (const name in mapping) {
            derived[mapping[name]] = name;
        }
        const refs = Object.keys(derived);
        this.oneOf = refs.map(ref => {
            const innerSchema = new SchemaModel(parser, parser.byRef(ref), ref, this.options, true);
            innerSchema.title = derived[ref];
            return innerSchema;
        });
    }
}
__decorate([
    mobx_1.observable
], SchemaModel.prototype, "activeOneOf", void 0);
__decorate([
    mobx_1.action
], SchemaModel.prototype, "activateOneOf", null);
exports.SchemaModel = SchemaModel;
function buildFields(parser, schema, $ref, options) {
    const props = schema.properties || {};
    const additionalProps = schema.additionalProperties;
    const defaults = schema.default || {};
    const fields = Object.keys(props || []).map(fieldName => {
        let field = props[fieldName];
        if (!field) {
            console.warn(`Field "${fieldName}" is invalid, skipping.\n Field must be an object but got ${typeof field} at "${$ref}"`);
            field = {};
        }
        const required = schema.required === undefined ? false : schema.required.indexOf(fieldName) > -1;
        return new Field_1.FieldModel(parser, {
            name: fieldName,
            required,
            schema: Object.assign(Object.assign({}, field), { default: field.default === undefined ? defaults[fieldName] : field.default }),
        }, $ref + '/properties/' + fieldName, options);
    });
    if (options.sortPropsAlphabetically) {
        utils_1.sortByField(fields, 'name');
    }
    if (options.requiredPropsFirst) {
        // if not sort alphabetically sort in the order from required keyword
        utils_1.sortByRequired(fields, !options.sortPropsAlphabetically ? schema.required : undefined);
    }
    if (typeof additionalProps === 'object' || additionalProps === true) {
        fields.push(new Field_1.FieldModel(parser, {
            name: (typeof additionalProps === 'object'
                ? additionalProps['x-additionalPropertiesName'] || 'property name'
                : 'property name').concat('*'),
            required: false,
            schema: additionalProps === true ? {} : additionalProps,
            kind: 'additionalProperties',
        }, $ref + '/additionalProperties', options));
    }
    return fields;
}
function getDiscriminator(schema) {
    return schema.discriminator || schema['x-discriminator'];
}
