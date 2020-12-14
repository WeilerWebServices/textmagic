"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const URLtemplate = require('url-template');
const dom_1 = require("./dom");
const helpers_1 = require("./helpers");
function isWildcardStatusCode(statusCode) {
    return typeof statusCode === 'string' && /\dxx/i.test(statusCode);
}
function isStatusCode(statusCode) {
    return statusCode === 'default' || helpers_1.isNumeric(statusCode) || isWildcardStatusCode(statusCode);
}
exports.isStatusCode = isStatusCode;
function getStatusCodeType(statusCode, defaultAsError = false) {
    if (statusCode === 'default') {
        return defaultAsError ? 'error' : 'success';
    }
    let code = typeof statusCode === 'string' ? parseInt(statusCode, 10) : statusCode;
    if (isWildcardStatusCode(statusCode)) {
        code *= 100; // parseInt('2xx') parses to 2
    }
    if (code < 100 || code > 599) {
        throw new Error('invalid HTTP code');
    }
    let res = 'success';
    if (code >= 300 && code < 400) {
        res = 'redirect';
    }
    else if (code >= 400) {
        res = 'error';
    }
    else if (code < 200) {
        res = 'info';
    }
    return res;
}
exports.getStatusCodeType = getStatusCodeType;
const operationNames = {
    get: true,
    post: true,
    put: true,
    head: true,
    patch: true,
    delete: true,
    options: true,
};
function isOperationName(key) {
    return key in operationNames;
}
exports.isOperationName = isOperationName;
function getOperationSummary(operation) {
    return (operation.summary ||
        operation.operationId ||
        (operation.description && operation.description.substring(0, 50)) ||
        '<no summary>');
}
exports.getOperationSummary = getOperationSummary;
const schemaKeywordTypes = {
    multipleOf: 'number',
    maximum: 'number',
    exclusiveMaximum: 'number',
    minimum: 'number',
    exclusiveMinimum: 'number',
    maxLength: 'string',
    minLength: 'string',
    pattern: 'string',
    items: 'array',
    maxItems: 'array',
    minItems: 'array',
    uniqueItems: 'array',
    maxProperties: 'object',
    minProperties: 'object',
    required: 'object',
    additionalProperties: 'object',
    properties: 'object',
};
function detectType(schema) {
    if (schema.type !== undefined) {
        return schema.type;
    }
    const keywords = Object.keys(schemaKeywordTypes);
    for (const keyword of keywords) {
        const type = schemaKeywordTypes[keyword];
        if (schema[keyword] !== undefined) {
            return type;
        }
    }
    return 'any';
}
exports.detectType = detectType;
function isPrimitiveType(schema, type = schema.type) {
    if (schema.oneOf !== undefined || schema.anyOf !== undefined) {
        return false;
    }
    if (type === 'object') {
        return schema.properties !== undefined
            ? Object.keys(schema.properties).length === 0
            : schema.additionalProperties === undefined;
    }
    if (type === 'array') {
        if (schema.items === undefined) {
            return true;
        }
        return false;
    }
    return true;
}
exports.isPrimitiveType = isPrimitiveType;
function isJsonLike(contentType) {
    return contentType.search(/json/i) !== -1;
}
exports.isJsonLike = isJsonLike;
function isFormUrlEncoded(contentType) {
    return contentType === 'application/x-www-form-urlencoded';
}
exports.isFormUrlEncoded = isFormUrlEncoded;
function delimitedEncodeField(fieldVal, fieldName, delimeter) {
    if (Array.isArray(fieldVal)) {
        return fieldVal.map(v => v.toString()).join(delimeter);
    }
    else if (typeof fieldVal === 'object') {
        return Object.keys(fieldVal)
            .map(k => `${k}${delimeter}${fieldVal[k]}`)
            .join(delimeter);
    }
    else {
        return fieldName + '=' + fieldVal.toString();
    }
}
function deepObjectEncodeField(fieldVal, fieldName) {
    if (Array.isArray(fieldVal)) {
        console.warn('deepObject style cannot be used with array value:' + fieldVal.toString());
        return '';
    }
    else if (typeof fieldVal === 'object') {
        return Object.keys(fieldVal)
            .map(k => `${fieldName}[${k}]=${fieldVal[k]}`)
            .join('&');
    }
    else {
        console.warn('deepObject style cannot be used with non-object value:' + fieldVal.toString());
        return '';
    }
}
function serializeFormValue(name, explode, value) {
    // Use RFC6570 safe name ([a-zA-Z0-9_]) and replace with our name later
    // e.g. URI.template doesn't parse names with hypen (-) which are valid query param names
    const safeName = '__redoc_param_name__';
    const suffix = explode ? '*' : '';
    const template = URLtemplate.parse(`{?${safeName}${suffix}}`);
    return template
        .expand({ [safeName]: value })
        .substring(1)
        .replace(/__redoc_param_name__/g, name);
}
/*
 * Should be used only for url-form-encoded body payloads
 * To be used for parmaters should be extended with other style values
 */
function urlFormEncodePayload(payload, encoding = {}) {
    if (Array.isArray(payload)) {
        throw new Error('Payload must have fields: ' + payload.toString());
    }
    else {
        return Object.keys(payload)
            .map(fieldName => {
            const fieldVal = payload[fieldName];
            const { style = 'form', explode = true } = encoding[fieldName] || {};
            switch (style) {
                case 'form':
                    return serializeFormValue(fieldName, explode, fieldVal);
                case 'spaceDelimited':
                    return delimitedEncodeField(fieldVal, fieldName, '%20');
                case 'pipeDelimited':
                    return delimitedEncodeField(fieldVal, fieldName, '|');
                case 'deepObject':
                    return deepObjectEncodeField(fieldVal, fieldName);
                default:
                    // TODO implement rest of styles for path parameters
                    console.warn('Incorrect or unsupported encoding style: ' + style);
                    return '';
            }
        })
            .join('&');
    }
}
exports.urlFormEncodePayload = urlFormEncodePayload;
function serializePathParameter(name, style, explode, value) {
    const suffix = explode ? '*' : '';
    let prefix = '';
    if (style === 'label') {
        prefix = '.';
    }
    else if (style === 'matrix') {
        prefix = ';';
    }
    // Use RFC6570 safe name ([a-zA-Z0-9_]) and replace with our name later
    // e.g. URI.template doesn't parse names with hypen (-) which are valid query param names
    const safeName = '__redoc_param_name__';
    const template = URLtemplate.parse(`{${prefix}${safeName}${suffix}}`);
    return template.expand({ [safeName]: value }).replace(/__redoc_param_name__/g, name);
}
function serializeQueryParameter(name, style, explode, value) {
    switch (style) {
        case 'form':
            return serializeFormValue(name, explode, value);
        case 'spaceDelimited':
            if (!Array.isArray(value)) {
                console.warn('The style spaceDelimited is only applicable to arrays');
                return '';
            }
            if (explode) {
                return serializeFormValue(name, explode, value);
            }
            return `${name}=${value.join('%20')}`;
        case 'pipeDelimited':
            if (!Array.isArray(value)) {
                console.warn('The style pipeDelimited is only applicable to arrays');
                return '';
            }
            if (explode) {
                return serializeFormValue(name, explode, value);
            }
            return `${name}=${value.join('|')}`;
        case 'deepObject':
            if (!explode || Array.isArray(value) || typeof value !== 'object') {
                console.warn('The style deepObject is only applicable for objects with explode=true');
                return '';
            }
            return deepObjectEncodeField(value, name);
        default:
            console.warn('Unexpected style for query: ' + style);
            return '';
    }
}
function serializeHeaderParameter(style, explode, value) {
    switch (style) {
        case 'simple':
            const suffix = explode ? '*' : '';
            // name is not important here, so use RFC6570 safe name ([a-zA-Z0-9_])
            const name = '__redoc_param_name__';
            const template = URLtemplate.parse(`{${name}${suffix}}`);
            return decodeURIComponent(template.expand({ [name]: value }));
        default:
            console.warn('Unexpected style for header: ' + style);
            return '';
    }
}
function serializeCookieParameter(name, style, explode, value) {
    switch (style) {
        case 'form':
            return serializeFormValue(name, explode, value);
        default:
            console.warn('Unexpected style for cookie: ' + style);
            return '';
    }
}
function serializeParameterValueWithMime(value, mime) {
    if (isJsonLike(mime)) {
        return JSON.stringify(value);
    }
    else {
        console.warn(`Parameter serialization as ${mime} is not supported`);
        return '';
    }
}
exports.serializeParameterValueWithMime = serializeParameterValueWithMime;
function serializeParameterValue(parameter, value) {
    const { name, style, explode = false, serializationMime } = parameter;
    if (serializationMime) {
        switch (parameter.in) {
            case 'path':
            case 'header':
                return serializeParameterValueWithMime(value, serializationMime);
            case 'cookie':
            case 'query':
                return `${name}=${serializeParameterValueWithMime(value, serializationMime)}`;
            default:
                console.warn('Unexpected parameter location: ' + parameter.in);
                return '';
        }
    }
    if (!style) {
        console.warn(`Missing style attribute or content for parameter ${name}`);
        return '';
    }
    switch (parameter.in) {
        case 'path':
            return serializePathParameter(name, style, explode, value);
        case 'query':
            return serializeQueryParameter(name, style, explode, value);
        case 'header':
            return serializeHeaderParameter(style, explode, value);
        case 'cookie':
            return serializeCookieParameter(name, style, explode, value);
        default:
            console.warn('Unexpected parameter location: ' + parameter.in);
            return '';
    }
}
exports.serializeParameterValue = serializeParameterValue;
function langFromMime(contentType) {
    if (contentType.search(/xml/i) !== -1) {
        return 'xml';
    }
    return 'clike';
}
exports.langFromMime = langFromMime;
function isNamedDefinition(pointer) {
    return /^#\/components\/schemas\/[^\/]+$/.test(pointer || '');
}
exports.isNamedDefinition = isNamedDefinition;
function humanizeRangeConstraint(description, min, max) {
    let stringRange;
    if (min !== undefined && max !== undefined) {
        if (min === max) {
            stringRange = `${min} ${description}`;
        }
        else {
            stringRange = `[ ${min} .. ${max} ] ${description}`;
        }
    }
    else if (max !== undefined) {
        stringRange = `<= ${max} ${description}`;
    }
    else if (min !== undefined) {
        if (min === 1) {
            stringRange = 'non-empty';
        }
        else {
            stringRange = `>= ${min} ${description}`;
        }
    }
    return stringRange;
}
function humanizeConstraints(schema) {
    const res = [];
    const stringRange = humanizeRangeConstraint('characters', schema.minLength, schema.maxLength);
    if (stringRange !== undefined) {
        res.push(stringRange);
    }
    const arrayRange = humanizeRangeConstraint('items', schema.minItems, schema.maxItems);
    if (arrayRange !== undefined) {
        res.push(arrayRange);
    }
    let numberRange;
    if (schema.minimum !== undefined && schema.maximum !== undefined) {
        numberRange = schema.exclusiveMinimum ? '( ' : '[ ';
        numberRange += schema.minimum;
        numberRange += ' .. ';
        numberRange += schema.maximum;
        numberRange += schema.exclusiveMaximum ? ' )' : ' ]';
    }
    else if (schema.maximum !== undefined) {
        numberRange = schema.exclusiveMaximum ? '< ' : '<= ';
        numberRange += schema.maximum;
    }
    else if (schema.minimum !== undefined) {
        numberRange = schema.exclusiveMinimum ? '> ' : '>= ';
        numberRange += schema.minimum;
    }
    if (numberRange !== undefined) {
        res.push(numberRange);
    }
    return res;
}
exports.humanizeConstraints = humanizeConstraints;
function sortByRequired(fields, order = []) {
    fields.sort((a, b) => {
        if (!a.required && b.required) {
            return 1;
        }
        else if (a.required && !b.required) {
            return -1;
        }
        else if (a.required && b.required) {
            return order.indexOf(a.name) - order.indexOf(b.name);
        }
        else {
            return 0;
        }
    });
}
exports.sortByRequired = sortByRequired;
function sortByField(fields, param) {
    fields.sort((a, b) => {
        return a[param].localeCompare(b[param]);
    });
}
exports.sortByField = sortByField;
function mergeParams(parser, pathParams = [], operationParams = []) {
    const operationParamNames = {};
    operationParams.forEach(param => {
        param = parser.shalowDeref(param);
        operationParamNames[param.name + '_' + param.in] = true;
    });
    // filter out path params overriden by operation ones with the same name
    pathParams = pathParams.filter(param => {
        param = parser.shalowDeref(param);
        return !operationParamNames[param.name + '_' + param.in];
    });
    return pathParams.concat(operationParams);
}
exports.mergeParams = mergeParams;
function mergeSimilarMediaTypes(types) {
    const mergedTypes = {};
    Object.keys(types).forEach(name => {
        const mime = types[name];
        // ignore content type parameters (e.g. charset) and merge
        const normalizedMimeName = name.split(';')[0].trim();
        if (!mergedTypes[normalizedMimeName]) {
            mergedTypes[normalizedMimeName] = mime;
            return;
        }
        mergedTypes[normalizedMimeName] = Object.assign(Object.assign({}, mergedTypes[normalizedMimeName]), mime);
    });
    return mergedTypes;
}
exports.mergeSimilarMediaTypes = mergeSimilarMediaTypes;
function expandDefaultServerVariables(url, variables = {}) {
    return url.replace(/(?:{)(\w+)(?:})/g, (match, name) => (variables[name] && variables[name].default) || match);
}
exports.expandDefaultServerVariables = expandDefaultServerVariables;
function normalizeServers(specUrl, servers) {
    const getHref = () => {
        if (!dom_1.IS_BROWSER) {
            return '';
        }
        const href = window.location.href;
        return href.endsWith('.html') ? path_1.dirname(href) : href;
    };
    const baseUrl = specUrl === undefined ? helpers_1.removeQueryString(getHref()) : path_1.dirname(specUrl);
    if (servers.length === 0) {
        return [
            {
                url: helpers_1.stripTrailingSlash(baseUrl),
            },
        ];
    }
    function normalizeUrl(url) {
        return helpers_1.resolveUrl(baseUrl, url);
    }
    return servers.map(server => {
        return Object.assign(Object.assign({}, server), { url: normalizeUrl(server.url), description: server.description || '' });
    });
}
exports.normalizeServers = normalizeServers;
exports.SECURITY_DEFINITIONS_COMPONENT_NAME = 'security-definitions';
exports.SECURITY_DEFINITIONS_JSX_NAME = 'SecurityDefinitions';
exports.SCHEMA_DEFINITION_JSX_NAME = 'SchemaDefinition';
exports.SECURITY_SCHEMES_SECTION_PREFIX = 'section/Authentication/';
function setSecuritySchemePrefix(prefix) {
    exports.SECURITY_SCHEMES_SECTION_PREFIX = prefix;
}
exports.setSecuritySchemePrefix = setSecuritySchemePrefix;
exports.shortenHTTPVerb = verb => ({
    delete: 'del',
    options: 'opts',
}[verb] || verb);
function isRedocExtension(key) {
    const redocExtensions = {
        'x-circular-ref': true,
        'x-code-samples': true,
        'x-displayName': true,
        'x-examples': true,
        'x-ignoredHeaderParameters': true,
        'x-logo': true,
        'x-nullable': true,
        'x-servers': true,
        'x-tagGroups': true,
        'x-traitTag': true,
        'x-additionalPropertiesName': true,
    };
    return key in redocExtensions;
}
exports.isRedocExtension = isRedocExtension;
function extractExtensions(obj, showExtensions) {
    return Object.keys(obj)
        .filter(key => {
        if (showExtensions === true) {
            return key.startsWith('x-') && !isRedocExtension(key);
        }
        return key.startsWith('x-') && showExtensions.indexOf(key) > -1;
    })
        .reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});
}
exports.extractExtensions = extractExtensions;
function pluralizeType(displayType) {
    return displayType
        .split(' or ')
        .map(type => type.replace(/^(string|object|number|integer|array|boolean)s?( ?.*)/, '$1s$2'))
        .join(' or ');
}
exports.pluralizeType = pluralizeType;
