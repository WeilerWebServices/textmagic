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
const utils_1 = require("../utils/");
let worker;
if (utils_1.IS_BROWSER) {
    try {
        // tslint:disable-next-line
        worker = require('workerize-loader?inline&fallback=false!./SearchWorker.worker');
    }
    catch (e) {
        worker = require('./SearchWorker.worker').default;
    }
}
else {
    worker = require('./SearchWorker.worker').default;
}
class SearchStore {
    constructor() {
        this.searchWorker = new worker();
    }
    indexItems(groups) {
        const recurse = items => {
            items.forEach(group => {
                if (group.type !== 'group') {
                    this.add(group.name, group.description || '', group.id);
                }
                recurse(group.items);
            });
        };
        recurse(groups);
        this.searchWorker.done();
    }
    add(title, body, meta) {
        this.searchWorker.add(title, body, meta);
    }
    search(q) {
        return this.searchWorker.search(q);
    }
    toJS() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.searchWorker.toJS();
        });
    }
    load(state) {
        this.searchWorker.load(state);
    }
}
exports.SearchStore = SearchStore;
