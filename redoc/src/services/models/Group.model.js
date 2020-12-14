"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const utils_1 = require("../../utils");
/**
 * Operations Group model ready to be used by components
 */
class GroupModel {
    //#endregion
    constructor(type, tagOrGroup, parent) {
        this.items = [];
        this.active = false;
        this.expanded = false;
        // markdown headings already have ids calculated as they are needed for heading anchors
        this.id = tagOrGroup.id || type + '/' + utils_1.safeSlugify(tagOrGroup.name);
        this.type = type;
        this.name = tagOrGroup['x-displayName'] || tagOrGroup.name;
        this.level = tagOrGroup.level || 1;
        // remove sections from markdown, same as in ApiInfo
        this.description = tagOrGroup.description || '';
        const firstHeadingLinePos = this.description.search(/^##?\s+/m);
        if (firstHeadingLinePos > -1) {
            this.description = this.description.substring(0, firstHeadingLinePos);
        }
        this.parent = parent;
        this.externalDocs = tagOrGroup.externalDocs;
        // groups are active (expanded) by default
        if (this.type === 'group') {
            this.expanded = true;
        }
    }
    activate() {
        this.active = true;
    }
    expand() {
        if (this.parent) {
            this.parent.expand();
        }
        this.expanded = true;
    }
    collapse() {
        // disallow collapsing groups
        if (this.type === 'group') {
            return;
        }
        this.expanded = false;
    }
    deactivate() {
        this.active = false;
    }
}
__decorate([
    mobx_1.observable
], GroupModel.prototype, "active", void 0);
__decorate([
    mobx_1.observable
], GroupModel.prototype, "expanded", void 0);
__decorate([
    mobx_1.action
], GroupModel.prototype, "activate", null);
__decorate([
    mobx_1.action
], GroupModel.prototype, "expand", null);
__decorate([
    mobx_1.action
], GroupModel.prototype, "collapse", null);
__decorate([
    mobx_1.action
], GroupModel.prototype, "deactivate", null);
exports.GroupModel = GroupModel;
