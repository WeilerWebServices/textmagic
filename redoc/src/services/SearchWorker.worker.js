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
const lunr = require("lunr");
try {
    // tslint:disable-next-line
    require('core-js/es/promise'); // bundle into worker
}
catch (_) {
    // nope
}
/* just for better typings */
class Worker {
    constructor() {
        this.add = add;
        this.done = done;
        this.search = search;
        this.toJS = toJS;
        this.load = load;
    }
}
exports.default = Worker;
let store = [];
let resolveIndex = () => {
    throw new Error('Should not be called');
};
const index = new Promise(resolve => {
    resolveIndex = resolve;
});
lunr.tokenizer.separator = /\s+/;
const builder = new lunr.Builder();
builder.field('title');
builder.field('description');
builder.ref('ref');
builder.pipeline.add(lunr.trimmer, lunr.stopWordFilter, lunr.stemmer);
const expandTerm = term => '*' + lunr.stemmer(new lunr.Token(term, {})) + '*';
function add(title, description, meta) {
    const ref = store.push(meta) - 1;
    const item = { title: title.toLowerCase(), description: description.toLowerCase(), ref };
    builder.add(item);
}
exports.add = add;
function done() {
    return __awaiter(this, void 0, void 0, function* () {
        resolveIndex(builder.build());
    });
}
exports.done = done;
function toJS() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            store,
            index: (yield index).toJSON(),
        };
    });
}
exports.toJS = toJS;
function load(state) {
    return __awaiter(this, void 0, void 0, function* () {
        store = state.store;
        resolveIndex(lunr.Index.load(state.index));
    });
}
exports.load = load;
function search(q, limit = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        if (q.trim().length === 0) {
            return [];
        }
        let searchResults = (yield index).query(t => {
            q.trim()
                .toLowerCase()
                .split(/\s+/)
                .forEach(term => {
                const exp = expandTerm(term);
                t.term(exp, {});
            });
        });
        if (limit > 0) {
            searchResults = searchResults.slice(0, limit);
        }
        return searchResults.map(res => ({ meta: store[res.ref], score: res.score }));
    });
}
exports.search = search;
