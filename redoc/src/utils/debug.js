"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debugTime(label) {
    if (process.env.NODE_ENV !== 'production') {
        console.time(label);
    }
}
exports.debugTime = debugTime;
function debugTimeEnd(label) {
    if (process.env.NODE_ENV !== 'production') {
        console.timeEnd(label);
    }
}
exports.debugTimeEnd = debugTimeEnd;
