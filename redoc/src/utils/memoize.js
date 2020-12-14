"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// source: https://github.com/andreypopp/memoize-decorator
const SENTINEL = {};
function memoize(target, name, descriptor) {
    if (typeof descriptor.value === 'function') {
        return _memoizeMethod(target, name, descriptor);
    }
    else if (typeof descriptor.get === 'function') {
        return _memoizeGetter(target, name, descriptor);
    }
    else {
        throw new Error('@memoize decorator can be applied to methods or getters, got ' +
            String(descriptor.value) +
            ' instead');
    }
}
exports.memoize = memoize;
function _memoizeGetter(target, name, descriptor) {
    const memoizedName = `_memoized_${name}`;
    const get = descriptor.get;
    target[memoizedName] = SENTINEL;
    return Object.assign(Object.assign({}, descriptor), { get() {
            if (this[memoizedName] === SENTINEL) {
                this[memoizedName] = get.call(this);
            }
            return this[memoizedName];
        } });
}
function _memoizeMethod(target, name, descriptor) {
    if (!descriptor.value || descriptor.value.length > 0) {
        throw new Error('@memoize decorator can only be applied to methods of zero arguments');
    }
    const memoizedName = `_memoized_${name}`;
    const value = descriptor.value;
    target[memoizedName] = SENTINEL;
    return Object.assign(Object.assign({}, descriptor), { value() {
            if (this[memoizedName] === SENTINEL) {
                this[memoizedName] = value.call(this);
            }
            return this[memoizedName];
        } });
}
