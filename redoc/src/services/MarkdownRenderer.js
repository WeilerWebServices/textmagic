"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const marked = require("marked");
const utils_1 = require("../utils");
const renderer = new marked.Renderer();
marked.setOptions({
    renderer,
    highlight: (str, lang) => {
        return utils_1.highlight(str, lang);
    },
});
exports.LEGACY_REGEXP = '^ {0,3}<!-- ReDoc-Inject:\\s+?<({component}).*?/?>\\s+?-->\\s*$';
// prettier-ignore
exports.MDX_COMPONENT_REGEXP = '(?:^ {0,3}<({component})([\\s\\S]*?)>([\\s\\S]*?)</\\2>' // with children
    + '|^ {0,3}<({component})([\\s\\S]*?)(?:/>|\\n{2,}))'; // self-closing
exports.COMPONENT_REGEXP = '(?:' + exports.LEGACY_REGEXP + '|' + exports.MDX_COMPONENT_REGEXP + ')';
function buildComponentComment(name) {
    return `<!-- ReDoc-Inject: <${name}> -->`;
}
exports.buildComponentComment = buildComponentComment;
class MarkdownRenderer {
    constructor(options) {
        this.options = options;
        this.headings = [];
        this.headingRule = (text, level, raw, slugger) => {
            if (level === 1) {
                this.currentTopHeading = this.saveHeading(text, level);
            }
            else if (level === 2) {
                this.saveHeading(text, level, this.currentTopHeading && this.currentTopHeading.items, this.currentTopHeading && this.currentTopHeading.id);
            }
            return this.originalHeadingRule(text, level, raw, slugger);
        };
        this.headingEnhanceRenderer = new marked.Renderer();
        this.originalHeadingRule = this.headingEnhanceRenderer.heading.bind(this.headingEnhanceRenderer);
        this.headingEnhanceRenderer.heading = this.headingRule;
    }
    static containsComponent(rawText, componentName) {
        const compRegexp = new RegExp(exports.COMPONENT_REGEXP.replace(/{component}/g, componentName), 'gmi');
        return compRegexp.test(rawText);
    }
    saveHeading(name, level, container = this.headings, parentId) {
        name = utils_1.unescapeHTMLChars(name);
        const item = {
            id: parentId ? `${parentId}/${utils_1.safeSlugify(name)}` : `section/${utils_1.safeSlugify(name)}`,
            name,
            level,
            items: [],
        };
        container.push(item);
        return item;
    }
    flattenHeadings(container) {
        if (container === undefined) {
            return [];
        }
        const res = [];
        for (const heading of container) {
            res.push(heading);
            res.push(...this.flattenHeadings(heading.items));
        }
        return res;
    }
    attachHeadingsDescriptions(rawText) {
        const buildRegexp = (heading) => {
            return new RegExp(`##?\\s+${heading.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`);
        };
        const flatHeadings = this.flattenHeadings(this.headings);
        if (flatHeadings.length < 1) {
            return;
        }
        let prevHeading = flatHeadings[0];
        let prevRegexp = buildRegexp(prevHeading);
        let prevPos = rawText.search(prevRegexp);
        for (let i = 1; i < flatHeadings.length; i++) {
            const heading = flatHeadings[i];
            const regexp = buildRegexp(heading);
            const currentPos = rawText.substr(prevPos + 1).search(regexp) + prevPos + 1;
            prevHeading.description = rawText
                .substring(prevPos, currentPos)
                .replace(prevRegexp, '')
                .trim();
            prevHeading = heading;
            prevRegexp = regexp;
            prevPos = currentPos;
        }
        prevHeading.description = rawText
            .substring(prevPos)
            .replace(prevRegexp, '')
            .trim();
    }
    renderMd(rawText, extractHeadings = false) {
        const opts = extractHeadings ? { renderer: this.headingEnhanceRenderer } : undefined;
        const res = marked(rawText.toString(), opts);
        return res;
    }
    extractHeadings(rawText) {
        this.renderMd(rawText, true);
        this.attachHeadingsDescriptions(rawText);
        const res = this.headings;
        this.headings = [];
        return res;
    }
    // regexp-based 👎: remark is slow and too big so for now using marked + regexps soup
    renderMdWithComponents(rawText) {
        const components = this.options && this.options.allowedMdComponents;
        if (!components || Object.keys(components).length === 0) {
            return [this.renderMd(rawText)];
        }
        const names = Object.keys(components).join('|');
        const componentsRegexp = new RegExp(exports.COMPONENT_REGEXP.replace(/{component}/g, names), 'mig');
        const htmlParts = [];
        const componentDefs = [];
        let match = componentsRegexp.exec(rawText);
        let lasxtIdx = 0;
        while (match) {
            htmlParts.push(rawText.substring(lasxtIdx, match.index));
            lasxtIdx = componentsRegexp.lastIndex;
            const compName = match[1] || match[2] || match[5];
            const componentMeta = components[compName];
            const props = match[3] || match[6];
            const children = match[4];
            if (componentMeta) {
                componentDefs.push({
                    component: componentMeta.component,
                    propsSelector: componentMeta.propsSelector,
                    props: Object.assign(Object.assign(Object.assign({}, parseProps(props)), componentMeta.props), { children }),
                });
            }
            match = componentsRegexp.exec(rawText);
        }
        htmlParts.push(rawText.substring(lasxtIdx));
        const res = [];
        for (let i = 0; i < htmlParts.length; i++) {
            const htmlPart = htmlParts[i];
            if (htmlPart) {
                res.push(this.renderMd(htmlPart));
            }
            if (componentDefs[i]) {
                res.push(componentDefs[i]);
            }
        }
        return res;
    }
}
exports.MarkdownRenderer = MarkdownRenderer;
function parseProps(props) {
    if (!props) {
        return {};
    }
    const regex = /([\w-]+)\s*=\s*(?:{([^}]+?)}|"([^"]+?)")/gim;
    const parsed = {};
    let match;
    // tslint:disable-next-line
    while ((match = regex.exec(props)) !== null) {
        if (match[3]) {
            // string prop match (in double quotes)
            parsed[match[1]] = match[3];
        }
        else if (match[2]) {
            // jsx prop match (in curly braces)
            let val;
            try {
                val = JSON.parse(match[2]);
            }
            catch (e) {
                /* noop */
            }
            parsed[match[1]] = val;
        }
    }
    return parsed;
}
