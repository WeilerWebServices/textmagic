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
const mobx_1 = require("mobx");
const loadAndBundleSpec_1 = require("../utils/loadAndBundleSpec");
const HistoryService_1 = require("./HistoryService");
const MarkerService_1 = require("./MarkerService");
const MenuStore_1 = require("./MenuStore");
const models_1 = require("./models");
const RedocNormalizedOptions_1 = require("./RedocNormalizedOptions");
const ScrollService_1 = require("./ScrollService");
const SearchStore_1 = require("./SearchStore");
const SchemaDefinition_1 = require("../components/SchemaDefinition/SchemaDefinition");
const SecuritySchemes_1 = require("../components/SecuritySchemes/SecuritySchemes");
const openapi_1 = require("../utils/openapi");
function createStore(spec, specUrl, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const resolvedSpec = yield loadAndBundleSpec_1.loadAndBundleSpec(spec || specUrl);
        return new AppStore(resolvedSpec, specUrl, options);
    });
}
exports.createStore = createStore;
class AppStore {
    constructor(spec, specUrl, options = {}, createSearchIndex = true) {
        this.marker = new MarkerService_1.MarkerService();
        this.disposer = null;
        this.rawOptions = options;
        this.options = new RedocNormalizedOptions_1.RedocNormalizedOptions(options, DEFAULT_OPTIONS);
        this.scroll = new ScrollService_1.ScrollService(this.options);
        // update position statically based on hash (in case of SSR)
        MenuStore_1.MenuStore.updateOnHistory(HistoryService_1.history.currentId, this.scroll);
        this.spec = new models_1.SpecStore(spec, specUrl, this.options);
        this.menu = new MenuStore_1.MenuStore(this.spec, this.scroll, HistoryService_1.history);
        if (!this.options.disableSearch) {
            this.search = new SearchStore_1.SearchStore();
            if (createSearchIndex) {
                this.search.indexItems(this.menu.items);
            }
            this.disposer = mobx_1.observe(this.menu, 'activeItemIdx', change => {
                this.updateMarkOnMenu(change.newValue);
            });
        }
    }
    /**
     * deserialize store
     * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
     */
    // TODO:
    static fromJS(state) {
        const inst = new AppStore(state.spec.data, state.spec.url, state.options, false);
        inst.menu.activeItemIdx = state.menu.activeItemIdx || 0;
        inst.menu.activate(inst.menu.flatItems[inst.menu.activeItemIdx]);
        if (!inst.options.disableSearch) {
            inst.search.load(state.searchIndex);
        }
        return inst;
    }
    onDidMount() {
        this.menu.updateOnHistory();
        this.updateMarkOnMenu(this.menu.activeItemIdx);
    }
    dispose() {
        this.scroll.dispose();
        this.menu.dispose();
        if (this.disposer != null) {
            this.disposer();
        }
    }
    /**
     * serializes store
     * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
     */
    // TODO: improve
    toJS() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                menu: {
                    activeItemIdx: this.menu.activeItemIdx,
                },
                spec: {
                    url: this.spec.parser.specUrl,
                    data: this.spec.parser.spec,
                },
                searchIndex: this.search ? yield this.search.toJS() : undefined,
                options: this.rawOptions,
            };
        });
    }
    updateMarkOnMenu(idx) {
        const start = Math.max(0, idx);
        const end = Math.min(this.menu.flatItems.length, start + 5);
        const elements = [];
        for (let i = start; i < end; i++) {
            let elem = this.menu.getElementAt(i);
            if (!elem) {
                continue;
            }
            if (this.menu.flatItems[i].type === 'section') {
                elem = elem.parentElement.parentElement;
            }
            if (elem) {
                elements.push(elem);
            }
        }
        this.marker.addOnly(elements);
        this.marker.mark();
    }
}
exports.AppStore = AppStore;
const DEFAULT_OPTIONS = {
    allowedMdComponents: {
        [openapi_1.SECURITY_DEFINITIONS_COMPONENT_NAME]: {
            component: SecuritySchemes_1.SecurityDefs,
            propsSelector: (store) => ({
                securitySchemes: store.spec.securitySchemes,
            }),
        },
        [openapi_1.SECURITY_DEFINITIONS_JSX_NAME]: {
            component: SecuritySchemes_1.SecurityDefs,
            propsSelector: (store) => ({
                securitySchemes: store.spec.securitySchemes,
            }),
        },
        [openapi_1.SCHEMA_DEFINITION_JSX_NAME]: {
            component: SchemaDefinition_1.SchemaDefinition,
            propsSelector: (store) => ({
                parser: store.spec.parser,
                options: store.options,
            }),
        },
    },
};
