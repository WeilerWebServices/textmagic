"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const MarkdownRenderer_1 = require("./MarkdownRenderer");
const models_1 = require("./models");
exports.GROUP_DEPTH = 0;
class MenuBuilder {
    /**
     * Builds page content structure based on tags
     */
    static buildStructure(parser, options) {
        const spec = parser.spec;
        const items = [];
        const tagsMap = MenuBuilder.getTagsWithOperations(spec);
        items.push(...MenuBuilder.addMarkdownItems(spec.info.description || '', undefined, 1, options));
        if (spec['x-tagGroups'] && spec['x-tagGroups'].length > 0) {
            items.push(...MenuBuilder.getTagGroupsItems(parser, undefined, spec['x-tagGroups'], tagsMap, options));
        }
        else {
            items.push(...MenuBuilder.getTagsItems(parser, tagsMap, undefined, undefined, options));
        }
        return items;
    }
    /**
     * extracts items from markdown description
     * @param description - markdown source
     */
    static addMarkdownItems(description, parent, initialDepth, options) {
        const renderer = new MarkdownRenderer_1.MarkdownRenderer(options);
        const headings = renderer.extractHeadings(description || '');
        const mapHeadingsDeep = (_parent, items, depth = 1) => items.map(heading => {
            const group = new models_1.GroupModel('section', heading, _parent);
            group.depth = depth;
            if (heading.items) {
                group.items = mapHeadingsDeep(group, heading.items, depth + 1);
            }
            if (MarkdownRenderer_1.MarkdownRenderer.containsComponent(group.description || '', utils_1.SECURITY_DEFINITIONS_COMPONENT_NAME)) {
                utils_1.setSecuritySchemePrefix(group.id + '/');
            }
            return group;
        });
        return mapHeadingsDeep(parent, headings, initialDepth);
    }
    /**
     * Returns array of OperationsGroup items for the tag groups (x-tagGroups vendor extenstion)
     * @param tags value of `x-tagGroups` vendor extension
     */
    static getTagGroupsItems(parser, parent, groups, tags, options) {
        const res = [];
        for (const group of groups) {
            const item = new models_1.GroupModel('group', group, parent);
            item.depth = exports.GROUP_DEPTH;
            item.items = MenuBuilder.getTagsItems(parser, tags, item, group, options);
            res.push(item);
        }
        // TODO checkAllTagsUsedInGroups
        return res;
    }
    /**
     * Returns array of OperationsGroup items for the tags of the group or for all tags
     * @param tagsMap tags info returned from `getTagsWithOperations`
     * @param parent parent item
     * @param group group which this tag belongs to. if not provided gets all tags
     */
    static getTagsItems(parser, tagsMap, parent, group, options) {
        let tagNames;
        if (group === undefined) {
            tagNames = Object.keys(tagsMap); // all tags
        }
        else {
            tagNames = group.tags;
        }
        const tags = tagNames.map(tagName => {
            if (!tagsMap[tagName]) {
                console.warn(`Non-existing tag "${tagName}" is added to the group "${group.name}"`);
                return null;
            }
            tagsMap[tagName].used = true;
            return tagsMap[tagName];
        });
        const res = [];
        for (const tag of tags) {
            if (!tag) {
                continue;
            }
            const item = new models_1.GroupModel('tag', tag, parent);
            item.depth = exports.GROUP_DEPTH + 1;
            // don't put empty tag into content, instead put its operations
            if (tag.name === '') {
                const items = [
                    ...MenuBuilder.addMarkdownItems(tag.description || '', item, item.depth + 1, options),
                    ...this.getOperationsItems(parser, undefined, tag, item.depth + 1, options),
                ];
                res.push(...items);
                continue;
            }
            item.items = [
                ...MenuBuilder.addMarkdownItems(tag.description || '', item, item.depth + 1, options),
                ...this.getOperationsItems(parser, item, tag, item.depth + 1, options),
            ];
            res.push(item);
        }
        return res;
    }
    /**
     * Returns array of Operation items for the tag
     * @param parent parent OperationsGroup
     * @param tag tag info returned from `getTagsWithOperations`
     * @param depth items depth
     */
    static getOperationsItems(parser, parent, tag, depth, options) {
        if (tag.operations.length === 0) {
            return [];
        }
        const res = [];
        for (const operationInfo of tag.operations) {
            const operation = new models_1.OperationModel(parser, operationInfo, parent, options);
            operation.depth = depth;
            res.push(operation);
        }
        return res;
    }
    /**
     * collects tags and maps each tag to list of operations belonging to this tag
     */
    static getTagsWithOperations(spec) {
        const tags = {};
        for (const tag of spec.tags || []) {
            tags[tag.name] = Object.assign(Object.assign({}, tag), { operations: [] });
        }
        const paths = spec.paths;
        for (const pathName of Object.keys(paths)) {
            const path = paths[pathName];
            const operations = Object.keys(path).filter(utils_1.isOperationName);
            for (const operationName of operations) {
                const operationInfo = path[operationName];
                let operationTags = operationInfo.tags;
                if (!operationTags || !operationTags.length) {
                    // empty tag
                    operationTags = [''];
                }
                for (const tagName of operationTags) {
                    let tag = tags[tagName];
                    if (tag === undefined) {
                        tag = {
                            name: tagName,
                            operations: [],
                        };
                        tags[tagName] = tag;
                    }
                    if (tag['x-traitTag']) {
                        continue;
                    }
                    tag.operations.push(Object.assign(Object.assign({}, operationInfo), { pathName, httpVerb: operationName, pathParameters: path.parameters || [] }));
                }
            }
        }
        return tags;
    }
}
exports.MenuBuilder = MenuBuilder;
