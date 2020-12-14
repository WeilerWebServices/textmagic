"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("../styled-components");
const headerFontSize = {
    1: '1.85714em',
    2: '1.57143em',
    3: '1.27em',
};
exports.headerCommonMixin = level => styled_components_1.css `
  font-family: ${({ theme }) => theme.typography.headings.fontFamily};
  font-weight: ${({ theme }) => theme.typography.headings.fontWeight};
  font-size: ${headerFontSize[level]};
  line-height: ${({ theme }) => theme.typography.headings.lineHeight};
`;
exports.H1 = styled_components_1.default.h1 `
  ${exports.headerCommonMixin(1)};
  color: ${({ theme }) => theme.colors.primary.main};

  ${styled_components_1.extensionsHook('H1')};
`;
exports.H2 = styled_components_1.default.h2 `
  ${exports.headerCommonMixin(2)};
  color: black;

  ${styled_components_1.extensionsHook('H2')};
`;
exports.H3 = styled_components_1.default.h2 `
  ${exports.headerCommonMixin(3)};
  color: black;

  ${styled_components_1.extensionsHook('H3')};
`;
exports.RightPanelHeader = styled_components_1.default.h3 `
  color: ${({ theme }) => theme.rightPanel.textColor};

  ${styled_components_1.extensionsHook('RightPanelHeader')};
`;
exports.UnderlinedHeader = styled_components_1.default.h5 `
  border-bottom: 1px solid rgba(38, 50, 56, 0.3);
  margin: 1em 0 1em 0;
  color: rgba(38, 50, 56, 0.5);
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.929em;
  line-height: 20px;

  ${styled_components_1.extensionsHook('UnderlinedHeader')};
`;
