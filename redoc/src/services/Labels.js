"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const labels = {
    enum: 'Enum',
    enumSingleValue: 'Value',
    enumArray: 'Items',
    default: 'Default',
    deprecated: 'Deprecated',
    example: 'Example',
    nullable: 'Nullable',
    recursive: 'Recursive',
    arrayOf: 'Array of ',
};
function setRedocLabels(_labels) {
    Object.assign(labels, _labels);
}
exports.setRedocLabels = setRedocLabels;
function l(key, idx) {
    const label = labels[key];
    if (idx !== undefined) {
        return label[idx];
    }
    return label;
}
exports.l = l;
