"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const openapi_1 = require("../../utils/openapi");
const externalExamplesCache = {};
class ExampleModel {
    constructor(parser, infoOrRef, mime, encoding) {
        this.mime = mime;
        const example = parser.deref(infoOrRef);
        this.value = example.value;
        this.summary = example.summary;
        this.description = example.description;
        if (example.externalValue) {
            this.externalValueUrl = url_1.resolve(parser.specUrl || '', example.externalValue);
        }
        parser.exitRef(infoOrRef);
        if (openapi_1.isFormUrlEncoded(mime) && this.value && typeof this.value === 'object') {
            this.value = openapi_1.urlFormEncodePayload(this.value, encoding);
        }
    }
    getExternalValue(mimeType) {
        if (!this.externalValueUrl) {
            return Promise.resolve(undefined);
        }
        if (externalExamplesCache[this.externalValueUrl]) {
            return externalExamplesCache[this.externalValueUrl];
        }
        externalExamplesCache[this.externalValueUrl] = fetch(this.externalValueUrl).then(res => {
            return res.text().then(txt => {
                if (!res.ok) {
                    return Promise.reject(new Error(txt));
                }
                if (openapi_1.isJsonLike(mimeType)) {
                    try {
                        return JSON.parse(txt);
                    }
                    catch (e) {
                        return txt;
                    }
                }
                else {
                    return txt;
                }
            });
        });
        return externalExamplesCache[this.externalValueUrl];
    }
}
exports.ExampleModel = ExampleModel;
