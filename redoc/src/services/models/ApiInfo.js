"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils/");
class ApiInfoModel {
    constructor(parser) {
        this.parser = parser;
        Object.assign(this, parser.spec.info);
        this.description = parser.spec.info.description || '';
        const firstHeadingLinePos = this.description.search(/^##?\s+/m);
        if (firstHeadingLinePos > -1) {
            this.description = this.description.substring(0, firstHeadingLinePos);
        }
        this.downloadLink = this.getDownloadLink();
        this.downloadFileName = this.getDownloadFileName();
    }
    getDownloadLink() {
        if (this.parser.specUrl) {
            return this.parser.specUrl;
        }
        if (utils_1.IS_BROWSER && window.Blob && window.URL && window.URL.createObjectURL) {
            const blob = new Blob([JSON.stringify(this.parser.spec, null, 2)], {
                type: 'application/json',
            });
            return window.URL.createObjectURL(blob);
        }
    }
    getDownloadFileName() {
        if (!this.parser.specUrl) {
            return 'swagger.json';
        }
        return undefined;
    }
}
exports.ApiInfoModel = ApiInfoModel;
