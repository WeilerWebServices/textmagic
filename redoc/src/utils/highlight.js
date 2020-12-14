"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Prism = require("prismjs");
require("prismjs/components/prism-bash.js");
require("prismjs/components/prism-c.js");
require("prismjs/components/prism-clike.js");
require("prismjs/components/prism-coffeescript.js");
require("prismjs/components/prism-cpp.js");
require("prismjs/components/prism-csharp.js");
require("prismjs/components/prism-go.js");
require("prismjs/components/prism-java.js");
require("prismjs/components/prism-lua.js");
require("prismjs/components/prism-markup-templating.js"); // dep of php
require("prismjs/components/prism-markup.js"); // xml
require("prismjs/components/prism-objectivec.js");
require("prismjs/components/prism-perl.js");
require("prismjs/components/prism-php.js");
require("prismjs/components/prism-python.js");
require("prismjs/components/prism-ruby.js");
require("prismjs/components/prism-scala.js");
require("prismjs/components/prism-sql.js");
require("prismjs/components/prism-swift.js");
const DEFAULT_LANG = 'clike';
Prism.languages.insertBefore('javascript', 'string', {
    'property string': {
        pattern: /([{,]\s*)"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
        lookbehind: true,
    },
}, undefined);
Prism.languages.insertBefore('javascript', 'punctuation', {
    property: {
        pattern: /([{,]\s*)[a-z]\w*(?=\s*:)/i,
        lookbehind: true,
    },
}, undefined);
/**
 * map language names to Prism.js names
 */
function mapLang(lang) {
    return ({
        json: 'js',
        'c++': 'cpp',
        'c#': 'csharp',
        'objective-c': 'objectivec',
        shell: 'bash',
        viml: 'vim',
    }[lang] || DEFAULT_LANG);
}
exports.mapLang = mapLang;
/**
 * Highlight source code string using Prism.js
 * @param source source code to highlight
 * @param lang highlight language
 * @return highlighted souce code as **html string**
 */
function highlight(source, lang = DEFAULT_LANG) {
    lang = lang.toLowerCase();
    let grammar = Prism.languages[lang];
    if (!grammar) {
        grammar = Prism.languages[mapLang(lang)];
    }
    return Prism.highlight(source, grammar, lang);
}
exports.highlight = highlight;
