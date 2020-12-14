"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const JsonSchemaRefParser = require("json-schema-ref-parser");
/* tslint:disable-next-line:no-implicit-dependencies */
const swagger2openapi_1 = require("swagger2openapi");
function loadAndBundleSpec(specUrlOrObject) {
    return __awaiter(this, void 0, void 0, function* () {
        const parser = new JsonSchemaRefParser();
        const spec = (yield parser.bundle(specUrlOrObject, {
            resolve: { http: { withCredentials: false } },
        }));
        if (spec.swagger !== undefined) {
            return convertSwagger2OpenAPI(spec);
        }
        else {
            return spec;
        }
    });
}
exports.loadAndBundleSpec = loadAndBundleSpec;
function convertSwagger2OpenAPI(spec) {
    console.warn('[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0');
    return new Promise((resolve, reject) => swagger2openapi_1.convertObj(spec, { patch: true, warnOnly: true, text: '{}' }, (err, res) => {
        // TODO: log any warnings
        if (err) {
            return reject(err);
        }
        resolve(res && res.openapi);
    }));
}
exports.convertSwagger2OpenAPI = convertSwagger2OpenAPI;
