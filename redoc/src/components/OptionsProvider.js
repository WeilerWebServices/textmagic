"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const RedocNormalizedOptions_1 = require("../services/RedocNormalizedOptions");
exports.OptionsContext = React.createContext(new RedocNormalizedOptions_1.RedocNormalizedOptions({}));
exports.OptionsProvider = exports.OptionsContext.Provider;
exports.OptionsConsumer = exports.OptionsContext.Consumer;
