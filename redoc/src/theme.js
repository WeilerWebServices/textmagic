"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polished_1 = require("polished");
const defaultTheme = {
    spacing: {
        unit: 5,
        sectionHorizontal: ({ spacing }) => spacing.unit * 8,
        sectionVertical: ({ spacing }) => spacing.unit * 8,
    },
    breakpoints: {
        small: '50rem',
        medium: '85rem',
        large: '105rem',
    },
    colors: {
        tonalOffset: 0.3,
        primary: {
            main: '#32329f',
            light: ({ colors }) => polished_1.lighten(colors.tonalOffset, colors.primary.main),
            dark: ({ colors }) => polished_1.darken(colors.tonalOffset, colors.primary.main),
            contrastText: ({ colors }) => polished_1.readableColor(colors.primary.main),
        },
        success: {
            main: '#00aa13',
            light: ({ colors }) => polished_1.lighten(colors.tonalOffset, colors.success.main),
            dark: ({ colors }) => polished_1.darken(colors.tonalOffset, colors.success.main),
            contrastText: ({ colors }) => polished_1.readableColor(colors.success.main),
        },
        warning: {
            main: '#d4ad03',
            light: ({ colors }) => polished_1.lighten(colors.tonalOffset, colors.warning.main),
            dark: ({ colors }) => polished_1.darken(colors.tonalOffset, colors.warning.main),
            contrastText: '#ffffff',
        },
        error: {
            main: '#e53935',
            light: ({ colors }) => polished_1.lighten(colors.tonalOffset, colors.error.main),
            dark: ({ colors }) => polished_1.darken(colors.tonalOffset, colors.error.main),
            contrastText: ({ colors }) => polished_1.readableColor(colors.error.main),
        },
        text: {
            primary: '#333333',
            secondary: ({ colors }) => polished_1.lighten(colors.tonalOffset, colors.text.primary),
        },
        border: {
            dark: 'rgba(0,0,0, 0.1)',
            light: '#ffffff',
        },
        responses: {
            success: {
                color: ({ colors }) => colors.success.main,
                backgroundColor: ({ colors }) => polished_1.transparentize(0.9, colors.success.main),
            },
            error: {
                color: ({ colors }) => colors.error.main,
                backgroundColor: ({ colors }) => polished_1.transparentize(0.9, colors.error.main),
            },
            redirect: {
                color: '#ffa500',
                backgroundColor: ({ colors }) => polished_1.transparentize(0.9, colors.responses.redirect.color),
            },
            info: {
                color: '#87ceeb',
                backgroundColor: ({ colors }) => polished_1.transparentize(0.9, colors.responses.info.color),
            },
        },
        http: {
            get: '#6bbd5b',
            post: '#248fb2',
            put: '#9b708b',
            options: '#d3ca12',
            patch: '#e09d43',
            delete: '#e27a7a',
            basic: '#999',
            link: '#31bbb6',
            head: '#c167e4',
        },
    },
    schema: {
        linesColor: theme => polished_1.lighten(theme.colors.tonalOffset, polished_1.desaturate(theme.colors.tonalOffset, theme.colors.primary.main)),
        defaultDetailsWidth: '75%',
        typeNameColor: theme => theme.colors.text.secondary,
        typeTitleColor: theme => theme.schema.typeNameColor,
        requireLabelColor: theme => theme.colors.error.main,
        labelsTextSize: '0.9em',
        nestingSpacing: '1em',
        nestedBackground: '#fafafa',
        arrow: {
            size: '1.1em',
            color: theme => theme.colors.text.secondary,
        },
    },
    typography: {
        fontSize: '14px',
        lineHeight: '1.5em',
        fontWeightRegular: '400',
        fontWeightBold: '600',
        fontWeightLight: '300',
        fontFamily: 'Roboto, sans-serif',
        smoothing: 'antialiased',
        optimizeSpeed: true,
        headings: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '400',
            lineHeight: '1.6em',
        },
        code: {
            fontSize: '13px',
            fontFamily: 'Courier, monospace',
            lineHeight: ({ typography }) => typography.lineHeight,
            fontWeight: ({ typography }) => typography.fontWeightRegular,
            color: '#e53935',
            backgroundColor: 'rgba(38, 50, 56, 0.05)',
            wrap: false,
        },
        links: {
            color: ({ colors }) => colors.primary.main,
            visited: ({ typography }) => typography.links.color,
            hover: ({ typography }) => polished_1.lighten(0.2, typography.links.color),
        },
    },
    menu: {
        width: '260px',
        backgroundColor: '#fafafa',
        textColor: '#333333',
        groupItems: {
            textTransform: 'uppercase',
        },
        level1Items: {
            textTransform: 'none',
        },
        arrow: {
            size: '1.5em',
            color: theme => theme.menu.textColor,
        },
    },
    logo: {
        maxHeight: ({ menu }) => menu.width,
        maxWidth: ({ menu }) => menu.width,
        gutter: '2px',
    },
    rightPanel: {
        backgroundColor: '#263238',
        width: '40%',
        textColor: '#ffffff',
    },
    codeSample: {
        backgroundColor: ({ rightPanel }) => polished_1.darken(0.1, rightPanel.backgroundColor),
    },
};
exports.default = defaultTheme;
function resolveTheme(theme) {
    const resolvedValues = {};
    let counter = 0;
    const setProxy = (obj, path) => {
        Object.keys(obj).forEach(k => {
            const currentPath = (path ? path + '.' : '') + k;
            const val = obj[k];
            if (typeof val === 'function') {
                Object.defineProperty(obj, k, {
                    get() {
                        if (!resolvedValues[currentPath]) {
                            counter++;
                            if (counter > 1000) {
                                throw new Error(`Theme probably contains circular dependency at ${currentPath}: ${val.toString()}`);
                            }
                            resolvedValues[currentPath] = val(theme);
                        }
                        return resolvedValues[currentPath];
                    },
                    enumerable: true,
                });
            }
            else if (typeof val === 'object') {
                setProxy(val, currentPath);
            }
        });
    };
    setProxy(theme, '');
    return JSON.parse(JSON.stringify(theme));
}
exports.resolveTheme = resolveTheme;
