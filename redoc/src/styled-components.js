"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styledComponents = require("styled-components");
const { default: styled, css, createGlobalStyle, keyframes, ThemeProvider, } = styledComponents;
exports.css = css;
exports.createGlobalStyle = createGlobalStyle;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.media = {
    lessThan(breakpoint, print) {
        return (...args) => css `
      @media ${print ? 'print, ' : ''} screen and (max-width: ${props => props.theme.breakpoints[breakpoint]}) {
        ${css(...args)};
      }
    `;
    },
    greaterThan(breakpoint) {
        return (...args) => css `
      @media (min-width: ${props => props.theme.breakpoints[breakpoint]}) {
        ${css(...args)};
      }
    `;
    },
    between(firstBreakpoint, secondBreakpoint) {
        return (...args) => css `
      @media (min-width: ${props => props.theme.breakpoints[firstBreakpoint]}) and (max-width: ${props => props.theme.breakpoints[secondBreakpoint]}) {
        ${css(...args)};
      }
    `;
    },
};
exports.default = styled;
function extensionsHook(styledName) {
    return props => {
        if (!props.theme.extensionsHook) {
            return;
        }
        return props.theme.extensionsHook(styledName, props);
    };
}
exports.extensionsHook = extensionsHook;
