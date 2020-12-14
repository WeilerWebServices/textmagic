"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const utils_1 = require("../../utils");
const Field_1 = require("./Field");
const MediaContent_1 = require("./MediaContent");
class ResponseModel {
    constructor(parser, code, defaultAsError, infoOrRef, options) {
        this.headers = [];
        this.expanded = options.expandResponses === 'all' || options.expandResponses[code];
        const info = parser.deref(infoOrRef);
        parser.exitRef(infoOrRef);
        this.code = code;
        if (info.content !== undefined) {
            this.content = new MediaContent_1.MediaContentModel(parser, info.content, false, options);
        }
        if (info['x-summary'] !== undefined) {
            this.summary = info['x-summary'];
            this.description = info.description || '';
        }
        else {
            this.summary = info.description || '';
            this.description = '';
        }
        this.type = utils_1.getStatusCodeType(code, defaultAsError);
        const headers = info.headers;
        if (headers !== undefined) {
            this.headers = Object.keys(headers).map(name => {
                const header = headers[name];
                return new Field_1.FieldModel(parser, Object.assign(Object.assign({}, header), { name }), '', options);
            });
        }
    }
    toggle() {
        this.expanded = !this.expanded;
    }
}
__decorate([
    mobx_1.observable
], ResponseModel.prototype, "expanded", void 0);
__decorate([
    mobx_1.action
], ResponseModel.prototype, "toggle", null);
exports.ResponseModel = ResponseModel;
