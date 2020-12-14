"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decko_1 = require("decko");
const EventEmitter = require("eventemitter3");
const utils_1 = require("../utils");
const EVENT = 'scroll';
class ScrollService {
    constructor(options) {
        this.options = options;
        this._prevOffsetY = 0;
        this._scrollParent = utils_1.IS_BROWSER ? window : undefined;
        this._emiter = new EventEmitter();
        this.bind();
    }
    bind() {
        this._prevOffsetY = this.scrollY();
        if (this._scrollParent) {
            this._scrollParent.addEventListener('scroll', this.handleScroll);
        }
    }
    dispose() {
        if (this._scrollParent) {
            this._scrollParent.removeEventListener('scroll', this.handleScroll);
        }
        this._emiter.removeAllListeners(EVENT);
    }
    scrollY() {
        if (typeof HTMLElement !== 'undefined' && this._scrollParent instanceof HTMLElement) {
            return this._scrollParent.scrollTop;
        }
        else if (this._scrollParent !== undefined) {
            return this._scrollParent.pageYOffset;
        }
        else {
            return 0;
        }
    }
    isElementBellow(el) {
        if (el === null) {
            return;
        }
        return el.getBoundingClientRect().top > this.options.scrollYOffset();
    }
    isElementAbove(el) {
        if (el === null) {
            return;
        }
        const top = el.getBoundingClientRect().top;
        return (top > 0 ? Math.floor(top) : Math.ceil(top)) <= this.options.scrollYOffset();
    }
    subscribe(cb) {
        const emmiter = this._emiter.addListener(EVENT, cb);
        return () => emmiter.removeListener(EVENT, cb);
    }
    scrollIntoView(element) {
        if (element === null) {
            return;
        }
        element.scrollIntoView();
        if (this._scrollParent && this._scrollParent.scrollBy) {
            // adding 1 account rounding errors in case scrollYOffset is float-number
            this._scrollParent.scrollBy(0, -this.options.scrollYOffset() + 1);
        }
    }
    scrollIntoViewBySelector(selector) {
        const element = utils_1.querySelector(selector);
        this.scrollIntoView(element);
    }
    handleScroll() {
        const scrollY = this.scrollY();
        const isScrolledDown = scrollY - this._prevOffsetY > 0;
        this._prevOffsetY = this.scrollY();
        this._emiter.emit(EVENT, isScrolledDown);
    }
}
__decorate([
    decko_1.bind,
    utils_1.Throttle(100)
], ScrollService.prototype, "handleScroll", null);
exports.ScrollService = ScrollService;
