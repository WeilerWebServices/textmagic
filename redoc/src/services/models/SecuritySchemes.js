"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi_1 = require("../../utils/openapi");
class SecuritySchemeModel {
    constructor(parser, id, scheme) {
        const info = parser.deref(scheme);
        this.id = id;
        this.sectionId = openapi_1.SECURITY_SCHEMES_SECTION_PREFIX + id;
        this.type = info.type;
        this.description = info.description || '';
        if (info.type === 'apiKey') {
            this.apiKey = {
                name: info.name,
                in: info.in,
            };
        }
        if (info.type === 'http') {
            this.http = {
                scheme: info.scheme,
                bearerFormat: info.bearerFormat,
            };
        }
        if (info.type === 'openIdConnect') {
            this.openId = {
                connectUrl: info.openIdConnectUrl,
            };
        }
        if (info.type === 'oauth2' && info.flows) {
            this.flows = info.flows;
        }
    }
}
exports.SecuritySchemeModel = SecuritySchemeModel;
class SecuritySchemesModel {
    constructor(parser) {
        const schemes = (parser.spec.components && parser.spec.components.securitySchemes) || {};
        this.schemes = Object.keys(schemes).map(name => new SecuritySchemeModel(parser, name, schemes[name]));
    }
}
exports.SecuritySchemesModel = SecuritySchemesModel;
