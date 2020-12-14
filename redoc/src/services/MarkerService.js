"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mark = require("mark.js");
class MarkerService {
    constructor() {
        this.map = new Map();
        this.prevTerm = '';
    }
    add(el) {
        this.map.set(el, new Mark(el));
    }
    delete(el) {
        this.map.delete(el);
    }
    addOnly(elements) {
        this.map.forEach((inst, elem) => {
            if (elements.indexOf(elem) === -1) {
                inst.unmark();
                this.map.delete(elem);
            }
        });
        for (const el of elements) {
            if (!this.map.has(el)) {
                this.map.set(el, new Mark(el));
            }
        }
    }
    clearAll() {
        this.unmark();
        this.map.clear();
    }
    mark(term) {
        if (!term && !this.prevTerm) {
            return;
        }
        this.map.forEach(val => {
            val.unmark();
            val.mark(term || this.prevTerm);
        });
        this.prevTerm = term || this.prevTerm;
    }
    unmark() {
        this.map.forEach(val => val.unmark());
        this.prevTerm = '';
    }
}
exports.MarkerService = MarkerService;
