"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sampler = require("openapi-sampler");
const Schema_1 = require("./Schema");
const utils_1 = require("../../utils");
const Example_1 = require("./Example");
class MediaTypeModel {
    /**
     * @param isRequestType needed to know if skipe RO/RW fields in objects
     */
    constructor(parser, name, isRequestType, info, options) {
        this.name = name;
        this.isRequestType = isRequestType;
        this.schema = info.schema && new Schema_1.SchemaModel(parser, info.schema, '', options);
        this.onlyRequiredInSamples = options.onlyRequiredInSamples;
        if (info.examples !== undefined) {
            this.examples = utils_1.mapValues(info.examples, example => new Example_1.ExampleModel(parser, example, name, info.encoding));
        }
        else if (info.example !== undefined) {
            this.examples = {
                default: new Example_1.ExampleModel(parser, { value: parser.shalowDeref(info.example) }, name, info.encoding),
            };
        }
        else if (utils_1.isJsonLike(name)) {
            this.generateExample(parser, info);
        }
    }
    generateExample(parser, info) {
        const samplerOptions = {
            skipReadOnly: this.isRequestType,
            skipNonRequired: this.isRequestType && this.onlyRequiredInSamples,
            skipWriteOnly: !this.isRequestType,
        };
        if (this.schema && this.schema.oneOf) {
            this.examples = {};
            for (const subSchema of this.schema.oneOf) {
                const sample = Sampler.sample(subSchema.rawSchema, samplerOptions, parser.spec);
                if (this.schema.discriminatorProp && typeof sample === 'object' && sample) {
                    sample[this.schema.discriminatorProp] = subSchema.title;
                }
                this.examples[subSchema.title] = new Example_1.ExampleModel(parser, {
                    value: sample,
                }, this.name, info.encoding);
            }
        }
        else if (this.schema) {
            this.examples = {
                default: new Example_1.ExampleModel(parser, {
                    value: Sampler.sample(info.schema, samplerOptions, parser.spec),
                }, this.name, info.encoding),
            };
        }
    }
}
exports.MediaTypeModel = MediaTypeModel;
