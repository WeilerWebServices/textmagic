"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const SecurityRequirement_1 = require("./SecurityRequirement");
const utils_1 = require("../../utils");
const Field_1 = require("./Field");
const RequestBody_1 = require("./RequestBody");
const Response_1 = require("./Response");
/**
 * Operation model ready to be used by components
 */
class OperationModel {
    constructor(parser, operationSpec, parent, options) {
        this.parser = parser;
        this.operationSpec = operationSpec;
        this.options = options;
        this.type = 'operation';
        this.items = [];
        this.ready = true;
        this.active = false;
        this.expanded = false;
        this.pointer = utils_1.JsonPointer.compile(['paths', operationSpec.pathName, operationSpec.httpVerb]);
        this.id =
            operationSpec.operationId !== undefined
                ? 'operation/' + operationSpec.operationId
                : parent !== undefined
                    ? parent.id + this.pointer
                    : this.pointer;
        this.name = utils_1.getOperationSummary(operationSpec);
        this.description = operationSpec.description;
        this.parent = parent;
        this.externalDocs = operationSpec.externalDocs;
        this.deprecated = !!operationSpec.deprecated;
        this.httpVerb = operationSpec.httpVerb;
        this.deprecated = !!operationSpec.deprecated;
        this.operationId = operationSpec.operationId;
        this.codeSamples = operationSpec['x-code-samples'] || [];
        this.path = operationSpec.pathName;
        const pathInfo = parser.byRef(utils_1.JsonPointer.compile(['paths', operationSpec.pathName]));
        this.servers = utils_1.normalizeServers(parser.specUrl, operationSpec.servers || (pathInfo && pathInfo.servers) || parser.spec.servers || []);
        this.security = (operationSpec.security || parser.spec.security || []).map(security => new SecurityRequirement_1.SecurityRequirementModel(security, parser));
        if (options.showExtensions) {
            this.extensions = utils_1.extractExtensions(operationSpec, options.showExtensions);
        }
    }
    /**
     * set operation as active (used by side menu)
     */
    activate() {
        this.active = true;
    }
    /**
     * set operation as inactive (used by side menu)
     */
    deactivate() {
        this.active = false;
    }
    expand() {
        if (this.parent) {
            this.parent.expand();
        }
    }
    collapse() {
        /* do nothing */
    }
    get requestBody() {
        return (this.operationSpec.requestBody &&
            new RequestBody_1.RequestBodyModel(this.parser, this.operationSpec.requestBody, this.options));
    }
    get parameters() {
        const _parameters = utils_1.mergeParams(this.parser, this.operationSpec.pathParameters, this.operationSpec.parameters).map(paramOrRef => new Field_1.FieldModel(this.parser, paramOrRef, this.pointer, this.options));
        if (this.options.sortPropsAlphabetically) {
            utils_1.sortByField(_parameters, 'name');
        }
        if (this.options.requiredPropsFirst) {
            utils_1.sortByRequired(_parameters);
        }
        return _parameters;
    }
    get responses() {
        let hasSuccessResponses = false;
        return Object.keys(this.operationSpec.responses || [])
            .filter(code => {
            if (code === 'default') {
                return true;
            }
            if (utils_1.getStatusCodeType(code) === 'success') {
                hasSuccessResponses = true;
            }
            return utils_1.isStatusCode(code);
        }) // filter out other props (e.g. x-props)
            .map(code => {
            return new Response_1.ResponseModel(this.parser, code, hasSuccessResponses, this.operationSpec.responses[code], this.options);
        });
    }
}
__decorate([
    mobx_1.observable
], OperationModel.prototype, "ready", void 0);
__decorate([
    mobx_1.observable
], OperationModel.prototype, "active", void 0);
__decorate([
    mobx_1.observable
], OperationModel.prototype, "expanded", void 0);
__decorate([
    mobx_1.action
], OperationModel.prototype, "activate", null);
__decorate([
    mobx_1.action
], OperationModel.prototype, "deactivate", null);
__decorate([
    utils_1.memoize
], OperationModel.prototype, "requestBody", null);
__decorate([
    utils_1.memoize
], OperationModel.prototype, "parameters", null);
__decorate([
    utils_1.memoize
], OperationModel.prototype, "responses", null);
exports.OperationModel = OperationModel;
