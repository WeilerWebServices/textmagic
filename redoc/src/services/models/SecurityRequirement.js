"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi_1 = require("../../utils/openapi");
class SecurityRequirementModel {
    constructor(requirement, parser) {
        const schemes = (parser.spec.components && parser.spec.components.securitySchemes) || {};
        this.schemes = Object.keys(requirement || {})
            .map(id => {
            const scheme = parser.deref(schemes[id]);
            const scopes = requirement[id] || [];
            if (!scheme) {
                console.warn(`Non existing security scheme referenced: ${id}. Skipping`);
                return undefined;
            }
            return Object.assign(Object.assign({}, scheme), { id, sectionId: openapi_1.SECURITY_SCHEMES_SECTION_PREFIX + id, scopes });
        })
            .filter(scheme => scheme !== undefined);
    }
}
exports.SecurityRequirementModel = SecurityRequirementModel;
