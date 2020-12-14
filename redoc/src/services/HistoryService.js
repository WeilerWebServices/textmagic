"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decko_1 = require("decko");
const eventemitter3_1 = require("eventemitter3");
const utils_1 = require("../utils/");
const EVENT = 'hashchange';
class HistoryService {
    constructor() {
        this.emit = () => {
            this._emiter.emit(EVENT, this.currentId);
        };
        this._emiter = new eventemitter3_1.EventEmitter();
        this.bind();
    }
    get currentId() {
        return utils_1.IS_BROWSER ? decodeURIComponent(window.location.hash.substring(1)) : '';
    }
    linkForId(id) {
        if (!id) {
            return '';
        }
        return '#' + id;
    }
    subscribe(cb) {
        const emmiter = this._emiter.addListener(EVENT, cb);
        return () => emmiter.removeListener(EVENT, cb);
    }
    bind() {
        if (utils_1.IS_BROWSER) {
            window.addEventListener('hashchange', this.emit, false);
        }
    }
    dispose() {
        if (utils_1.IS_BROWSER) {
            window.removeEventListener('hashchange', this.emit);
        }
    }
    replace(id, rewriteHistory = false) {
        if (!utils_1.IS_BROWSER) {
            return;
        }
        if (id == null || id === this.currentId) {
            return;
        }
        if (rewriteHistory) {
            window.history.replaceState(null, '', window.location.href.split('#')[0] + this.linkForId(id));
            return;
        }
        window.history.pushState(null, '', window.location.href.split('#')[0] + this.linkForId(id));
        this.emit();
    }
}
__decorate([
    decko_1.bind,
    decko_1.debounce
], HistoryService.prototype, "replace", null);
exports.HistoryService = HistoryService;
exports.history = new HistoryService();
if (module.hot) {
    module.hot.dispose(() => {
        exports.history.dispose();
    });
}
