"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const MediaType_1 = require("./MediaType");
const utils_1 = require("../../utils");
/**
 * MediaContent model ready to be sued by React components
 * Contains multiple MediaTypes and keeps track of the currently active one
 */
class MediaContentModel {
    /**
     * @param isRequestType needed to know if skipe RO/RW fields in objects
     */
    constructor(parser, info, isRequestType, options) {
        this.parser = parser;
        this.isRequestType = isRequestType;
        this.activeMimeIdx = 0;
        if (options.unstable_ignoreMimeParameters) {
            info = utils_1.mergeSimilarMediaTypes(info);
        }
        this.mediaTypes = Object.keys(info).map(name => {
            const mime = info[name];
            // reset deref cache just in case something is left there
            parser.resetVisited();
            return new MediaType_1.MediaTypeModel(parser, name, isRequestType, mime, options);
        });
    }
    /**
     * Set active media type by index
     * @param idx media type index
     */
    activate(idx) {
        this.activeMimeIdx = idx;
    }
    get active() {
        return this.mediaTypes[this.activeMimeIdx];
    }
    get hasSample() {
        return this.mediaTypes.filter(mime => !!mime.examples).length > 0;
    }
}
__decorate([
    mobx_1.observable
], MediaContentModel.prototype, "activeMimeIdx", void 0);
__decorate([
    mobx_1.action
], MediaContentModel.prototype, "activate", null);
__decorate([
    mobx_1.computed
], MediaContentModel.prototype, "active", null);
exports.MediaContentModel = MediaContentModel;
