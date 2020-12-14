"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
const memoize_one_1 = require("memoize-one");
const react_1 = require("react");
const services_1 = require("../services/");
const utils_1 = require("../utils");
const { Provider, Consumer } = react_1.createContext(undefined);
exports.StoreProvider = Provider;
exports.StoreConsumer = Consumer;
class StoreBuilder extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            loading: true,
            resolvedSpec: null,
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.specUrl !== prevState.prevSpecUrl || nextProps.spec !== prevState.prevSpec) {
            return {
                loading: true,
                resolvedSpec: null,
                prevSpec: nextProps.spec,
                prevSpecUrl: nextProps.specUrl,
            };
        }
        return null;
    }
    makeStore(spec, specUrl, options) {
        if (!spec) {
            return undefined;
        }
        try {
            return new services_1.AppStore(spec, specUrl, options);
        }
        catch (e) {
            if (this.props.onLoaded) {
                this.props.onLoaded(e);
            }
            throw e;
        }
    }
    componentDidMount() {
        this.load();
    }
    componentDidUpdate() {
        if (this.state.resolvedSpec === null) {
            this.load();
        }
        else if (!this.state.loading && this.props.onLoaded) {
            // may run multiple time
            this.props.onLoaded();
        }
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            const { specUrl, spec } = this.props;
            try {
                const resolvedSpec = yield utils_1.loadAndBundleSpec(spec || specUrl);
                this.setState({ resolvedSpec, loading: false });
            }
            catch (e) {
                if (this.props.onLoaded) {
                    this.props.onLoaded(e);
                }
                this.setState({ error: e });
            }
        });
    }
    render() {
        if (this.state.error) {
            throw this.state.error;
        }
        const { specUrl, options } = this.props;
        const { loading, resolvedSpec } = this.state;
        return this.props.children({
            loading,
            store: this.makeStore(resolvedSpec, specUrl, options),
        });
    }
}
__decorate([
    memoize_one_1.default
], StoreBuilder.prototype, "makeStore", null);
exports.StoreBuilder = StoreBuilder;
