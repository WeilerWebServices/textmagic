"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("../styled-components");
exports.OneOfList = styled_components_1.default.ul `
  margin: 0 0 3px 0;
  padding: 0;
  list-style: none;
  display: inline-block;
`;
exports.OneOfLabel = styled_components_1.default.span `
  font-size: 0.9em;
  margin-right: 10px;
  color: ${props => props.theme.colors.primary.main};
  font-family: Montserrat;
}
`;
exports.OneOfButton = styled_components_1.default.li `
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 0.8em;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.primary.main};
  padding: 2px 10px;

  ${props => {
    if (props.active) {
        return `
      color: white;
      background-color: ${props.theme.colors.primary.main};
      `;
    }
    else {
        return `
        color: ${props.theme.colors.primary.main};
        background-color: white;
      `;
    }
}}
`;
exports.ArrayOpenningLabel = styled_components_1.default.div `
  font-size: 0.9em;
  font-family: ${props => props.theme.typography.code.fontFamily};
  &::after {
    content: ' [';
  }
`;
exports.ArrayClosingLabel = styled_components_1.default.div `
  font-size: 0.9em;
  font-family: ${props => props.theme.typography.code.fontFamily};
  &::after {
    content: ']';
  }
`;
