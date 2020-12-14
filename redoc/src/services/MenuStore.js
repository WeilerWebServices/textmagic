"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const dom_1 = require("../utils/dom");
const HistoryService_1 = require("./HistoryService");
const utils_1 = require("../utils");
const MenuBuilder_1 = require("./MenuBuilder");
exports.SECTION_ATTR = 'data-section-id';
/**
 * Stores all side-menu related information
 */
class MenuStore {
    /**
     *
     * @param spec [SpecStore](#SpecStore) which contains page content structure
     * @param scroll scroll service instance used by this menu
     */
    constructor(spec, scroll, history) {
        this.scroll = scroll;
        this.history = history;
        /**
         * active item absolute index (when flattened). -1 means nothing is selected
         */
        this.activeItemIdx = -1;
        /**
         * whether sidebar with menu is opened or not
         */
        this.sideBarOpened = false;
        /**
         * update active items on scroll
         * @param isScrolledDown whether last scroll was downside
         */
        this.updateOnScroll = (isScrolledDown) => {
            const step = isScrolledDown ? 1 : -1;
            let itemIdx = this.activeItemIdx;
            while (true) {
                if (itemIdx === -1 && !isScrolledDown) {
                    break;
                }
                if (itemIdx >= this.flatItems.length - 1 && isScrolledDown) {
                    break;
                }
                if (isScrolledDown) {
                    const el = this.getElementAtOrFirstChild(itemIdx + 1);
                    if (this.scroll.isElementBellow(el)) {
                        break;
                    }
                }
                else {
                    const el = this.getElementAt(itemIdx);
                    if (this.scroll.isElementAbove(el)) {
                        break;
                    }
                }
                itemIdx += step;
            }
            this.activate(this.flatItems[itemIdx], true, true);
        };
        /**
         * update active items on hash change
         * @param id current hash
         */
        this.updateOnHistory = (id = this.history.currentId) => {
            if (!id) {
                return;
            }
            let item;
            item = this.flatItems.find(i => i.id === id);
            if (item) {
                this.activateAndScroll(item, false);
            }
            else {
                if (id.startsWith(utils_1.SECURITY_SCHEMES_SECTION_PREFIX)) {
                    item = this.flatItems.find(i => utils_1.SECURITY_SCHEMES_SECTION_PREFIX.startsWith(i.id));
                    this.activate(item);
                }
                this.scroll.scrollIntoViewBySelector(`[${exports.SECTION_ATTR}="${id}"]`);
            }
        };
        this.getItemById = (id) => {
            return this.flatItems.find(item => item.id === id);
        };
        this.items = spec.contentItems;
        this.flatItems = utils_1.flattenByProp(this.items || [], 'items');
        this.flatItems.forEach((item, idx) => (item.absoluteIdx = idx));
        this.subscribe();
    }
    /**
     * Statically try update scroll position
     * Used before hydrating from server-side rendered html to scroll page faster
     */
    static updateOnHistory(id = HistoryService_1.history.currentId, scroll) {
        if (!id) {
            return;
        }
        scroll.scrollIntoViewBySelector(`[${exports.SECTION_ATTR}="${id}"]`);
    }
    subscribe() {
        this._unsubscribe = this.scroll.subscribe(this.updateOnScroll);
        this._hashUnsubscribe = this.history.subscribe(this.updateOnHistory);
    }
    toggleSidebar() {
        this.sideBarOpened = this.sideBarOpened ? false : true;
    }
    closeSidebar() {
        this.sideBarOpened = false;
    }
    /**
     * get section/operation DOM Node related to the item or null if it doesn't exist
     * @param idx item absolute index
     */
    getElementAt(idx) {
        const item = this.flatItems[idx];
        return (item && dom_1.querySelector(`[${exports.SECTION_ATTR}="${item.id}"]`)) || null;
    }
    /**
     * get section/operation DOM Node related to the item or if it is group item, returns first item of the group
     * @param idx item absolute index
     */
    getElementAtOrFirstChild(idx) {
        let item = this.flatItems[idx];
        if (item && item.type === 'group') {
            item = item.items[0];
        }
        return (item && dom_1.querySelector(`[${exports.SECTION_ATTR}="${item.id}"]`)) || null;
    }
    /**
     * current active item
     */
    get activeItem() {
        return this.flatItems[this.activeItemIdx] || undefined;
    }
    /**
     * activate menu item
     * @param item item to activate
     * @param updateLocation [true] whether to update location
     * @param rewriteHistory [false] whether to rewrite browser history (do not create new enrty)
     */
    activate(item, updateLocation = true, rewriteHistory = false) {
        if ((this.activeItem && this.activeItem.id) === (item && item.id)) {
            return;
        }
        if (item && item.type === 'group') {
            return;
        }
        this.deactivate(this.activeItem);
        if (!item) {
            this.history.replace('', rewriteHistory);
            return;
        }
        // do not allow activating group items
        // TODO: control over options
        if (item.depth <= MenuBuilder_1.GROUP_DEPTH) {
            return;
        }
        this.activeItemIdx = item.absoluteIdx;
        if (updateLocation) {
            this.history.replace(item.id, rewriteHistory);
        }
        item.activate();
        item.expand();
    }
    /**
     * makes item and all the parents not active
     * @param item item to deactivate
     */
    deactivate(item) {
        if (item === undefined) {
            return;
        }
        item.deactivate();
        while (item !== undefined) {
            item.collapse();
            item = item.parent;
        }
    }
    /**
     * activate menu item and scroll to it
     * @see MenuStore.activate
     */
    activateAndScroll(item, updateLocation, rewriteHistory) {
        // item here can be a copy from search results so find corresponding item from menu
        const menuItem = (item && this.getItemById(item.id)) || item;
        this.activate(menuItem, updateLocation, rewriteHistory);
        this.scrollToActive();
        if (!menuItem || !menuItem.items.length) {
            this.closeSidebar();
        }
    }
    /**
     * scrolls to active section
     */
    scrollToActive() {
        this.scroll.scrollIntoView(this.getElementAt(this.activeItemIdx));
    }
    dispose() {
        this._unsubscribe();
        this._hashUnsubscribe();
    }
}
__decorate([
    mobx_1.observable
], MenuStore.prototype, "activeItemIdx", void 0);
__decorate([
    mobx_1.observable
], MenuStore.prototype, "sideBarOpened", void 0);
__decorate([
    mobx_1.action
], MenuStore.prototype, "toggleSidebar", null);
__decorate([
    mobx_1.action
], MenuStore.prototype, "closeSidebar", null);
__decorate([
    mobx_1.action
], MenuStore.prototype, "activate", null);
__decorate([
    mobx_1.action.bound
], MenuStore.prototype, "activateAndScroll", null);
exports.MenuStore = MenuStore;
