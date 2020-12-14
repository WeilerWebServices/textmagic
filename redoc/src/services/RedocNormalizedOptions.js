"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_1 = require("../theme");
const dom_1 = require("../utils/dom");
const helpers_1 = require("../utils/helpers");
const Labels_1 = require("./Labels");
function argValueToBoolean(val) {
    if (val === undefined) {
        return false;
    }
    if (typeof val === 'string') {
        return true;
    }
    return val;
}
class RedocNormalizedOptions {
    constructor(raw, defaults = {}) {
        raw = Object.assign(Object.assign({}, defaults), raw);
        const hook = raw.theme && raw.theme.extensionsHook;
        this.theme = theme_1.resolveTheme(helpers_1.mergeObjects({}, theme_1.default, Object.assign(Object.assign({}, raw.theme), { extensionsHook: undefined })));
        this.theme.extensionsHook = hook;
        // do not support dynamic labels changes. Labels should be configured before
        Labels_1.setRedocLabels(raw.labels);
        this.scrollYOffset = RedocNormalizedOptions.normalizeScrollYOffset(raw.scrollYOffset);
        this.hideHostname = RedocNormalizedOptions.normalizeHideHostname(raw.hideHostname);
        this.expandResponses = RedocNormalizedOptions.normalizeExpandResponses(raw.expandResponses);
        this.requiredPropsFirst = argValueToBoolean(raw.requiredPropsFirst);
        this.sortPropsAlphabetically = argValueToBoolean(raw.sortPropsAlphabetically);
        this.noAutoAuth = argValueToBoolean(raw.noAutoAuth);
        this.nativeScrollbars = argValueToBoolean(raw.nativeScrollbars);
        this.pathInMiddlePanel = argValueToBoolean(raw.pathInMiddlePanel);
        this.untrustedSpec = argValueToBoolean(raw.untrustedSpec);
        this.hideDownloadButton = argValueToBoolean(raw.hideDownloadButton);
        this.disableSearch = argValueToBoolean(raw.disableSearch);
        this.onlyRequiredInSamples = argValueToBoolean(raw.onlyRequiredInSamples);
        this.showExtensions = RedocNormalizedOptions.normalizeShowExtensions(raw.showExtensions);
        this.hideSingleRequestSampleTab = argValueToBoolean(raw.hideSingleRequestSampleTab);
        this.menuToggle = argValueToBoolean(raw.menuToggle);
        this.jsonSampleExpandLevel = RedocNormalizedOptions.normalizeJsonSampleExpandLevel(raw.jsonSampleExpandLevel);
        this.enumSkipQuotes = argValueToBoolean(raw.enumSkipQuotes);
        this.unstable_ignoreMimeParameters = argValueToBoolean(raw.unstable_ignoreMimeParameters);
        this.allowedMdComponents = raw.allowedMdComponents || {};
        this.expandDefaultServerVariables = argValueToBoolean(raw.expandDefaultServerVariables);
    }
    static normalizeExpandResponses(value) {
        if (value === 'all') {
            return 'all';
        }
        if (typeof value === 'string') {
            const res = {};
            value.split(',').forEach(code => {
                res[code.trim()] = true;
            });
            return res;
        }
        else if (value !== undefined) {
            console.warn(`expandResponses must be a string but received value "${value}" of type ${typeof value}`);
        }
        return {};
    }
    static normalizeHideHostname(value) {
        return !!value;
    }
    static normalizeScrollYOffset(value) {
        // just number is not valid selector and leads to crash so checking if isNumeric here
        if (typeof value === 'string' && !helpers_1.isNumeric(value)) {
            const el = dom_1.querySelector(value);
            if (!el) {
                console.warn('scrollYOffset value is a selector to non-existing element. Using offset 0 by default');
            }
            const bottom = (el && el.getBoundingClientRect().bottom) || 0;
            return () => bottom;
        }
        else if (typeof value === 'number' || helpers_1.isNumeric(value)) {
            return () => (typeof value === 'number' ? value : parseFloat(value));
        }
        else if (typeof value === 'function') {
            return () => {
                const res = value();
                if (typeof res !== 'number') {
                    console.warn(`scrollYOffset should return number but returned value "${res}" of type ${typeof res}`);
                }
                return res;
            };
        }
        else if (value !== undefined) {
            console.warn('Wrong value for scrollYOffset ReDoc option: should be string, number or function');
        }
        return () => 0;
    }
    static normalizeShowExtensions(value) {
        if (typeof value === 'undefined') {
            return false;
        }
        if (value === '') {
            return true;
        }
        if (typeof value === 'string') {
            return value.split(',').map(ext => ext.trim());
        }
        return value;
    }
    static normalizeJsonSampleExpandLevel(level) {
        if (level === 'all') {
            return +Infinity;
        }
        if (!isNaN(Number(level))) {
            return Math.ceil(Number(level));
        }
        return 2;
    }
}
exports.RedocNormalizedOptions = RedocNormalizedOptions;
