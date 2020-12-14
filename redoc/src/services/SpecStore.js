"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MenuBuilder_1 = require("./MenuBuilder");
const ApiInfo_1 = require("./models/ApiInfo");
const SecuritySchemes_1 = require("./models/SecuritySchemes");
const OpenAPIParser_1 = require("./OpenAPIParser");
/**
 * Store that containts all the specification related information in the form of tree
 */
class SpecStore {
    constructor(spec, specUrl, options) {
        this.options = options;
        this.parser = new OpenAPIParser_1.OpenAPIParser(spec, specUrl, options);
        this.info = new ApiInfo_1.ApiInfoModel(this.parser);
        this.externalDocs = this.parser.spec.externalDocs;
        this.contentItems = MenuBuilder_1.MenuBuilder.buildStructure(this.parser, this.options);
        this.securitySchemes = new SecuritySchemes_1.SecuritySchemesModel(this.parser);
    }
}
exports.SpecStore = SpecStore;
