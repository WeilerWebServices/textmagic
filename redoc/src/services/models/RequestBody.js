"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MediaContent_1 = require("./MediaContent");
class RequestBodyModel {
    constructor(parser, infoOrRef, options) {
        const info = parser.deref(infoOrRef);
        this.description = info.description || '';
        this.required = !!info.required;
        parser.exitRef(infoOrRef);
        if (info.content !== undefined) {
            this.content = new MediaContent_1.MediaContentModel(parser, info.content, true, options);
        }
    }
}
exports.RequestBodyModel = RequestBodyModel;
