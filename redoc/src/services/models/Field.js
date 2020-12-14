"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const openapi_1 = require("../../utils/openapi");
const Schema_1 = require("./Schema");
function getDefaultStyleValue(parameterLocation) {
    switch (parameterLocation) {
        case 'header':
            return 'simple';
        case 'query':
            return 'form';
        case 'path':
            return 'simple';
        default:
            return 'form';
    }
}
/**
 * Field or Parameter model ready to be used by components
 */
class FieldModel {
    constructor(parser, infoOrRef, pointer, options) {
        this.expanded = false;
        const info = parser.deref(infoOrRef);
        this.kind = infoOrRef.kind || 'field';
        this.name = infoOrRef.name || info.name;
        this.in = info.in;
        this.required = !!info.required;
        let fieldSchema = info.schema;
        let serializationMime = '';
        if (!fieldSchema && info.in && info.content) {
            serializationMime = Object.keys(info.content)[0];
            fieldSchema = info.content[serializationMime] && info.content[serializationMime].schema;
        }
        this.schema = new Schema_1.SchemaModel(parser, fieldSchema || {}, pointer, options);
        this.description =
            info.description === undefined ? this.schema.description || '' : info.description;
        this.example = info.example || this.schema.example;
        if (serializationMime) {
            this.serializationMime = serializationMime;
        }
        else if (info.style) {
            this.style = info.style;
        }
        else if (this.in) {
            this.style = getDefaultStyleValue(this.in);
        }
        this.explode = !!info.explode;
        this.deprecated = info.deprecated === undefined ? !!this.schema.deprecated : info.deprecated;
        parser.exitRef(infoOrRef);
        if (options.showExtensions) {
            this.extensions = openapi_1.extractExtensions(info, options.showExtensions);
        }
    }
    toggle() {
        this.expanded = !this.expanded;
    }
}
__decorate([
    mobx_1.observable
], FieldModel.prototype, "expanded", void 0);
__decorate([
    mobx_1.action
], FieldModel.prototype, "toggle", null);
exports.FieldModel = FieldModel;
