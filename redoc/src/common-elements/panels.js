"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MenuStore_1 = require("../services/MenuStore");
const styled_components_1 = require("../styled-components");
exports.MiddlePanel = styled_components_1.default.div `
  width: calc(100% - ${props => props.theme.rightPanel.width});
  padding: 0 ${props => props.theme.spacing.sectionHorizontal}px;

  ${({ compact, theme }) => styled_components_1.media.lessThan('medium', true) `
    width: 100%;
    padding: ${`${compact ? 0 : theme.spacing.sectionVertical}px ${theme.spacing.sectionHorizontal}px`};
  `};
`;
exports.Section = styled_components_1.default.div.attrs(props => ({
    [MenuStore_1.SECTION_ATTR]: props.id,
})) `
  padding: ${props => props.theme.spacing.sectionVertical}px 0;

  &:last-child {
    min-height: calc(100vh + 1px);
  }

  & > &:last-child {
    min-height: initial;
  }

  ${styled_components_1.media.lessThan('medium', true) `
    padding: 0;
  `}
  ${(props) => (props.underlined &&
    `
    position: relative;

    &:not(:last-of-type):after {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: block;
      content: '';
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  `) ||
    ''}
`;
exports.RightPanel = styled_components_1.default.div `
  width: ${props => props.theme.rightPanel.width};
  color: ${({ theme }) => theme.rightPanel.textColor};
  background-color: ${props => props.theme.rightPanel.backgroundColor};
  padding: 0 ${props => props.theme.spacing.sectionHorizontal}px;

  ${styled_components_1.media.lessThan('medium', true) `
    width: 100%;
    padding: ${props => `${props.theme.spacing.sectionVertical}px ${props.theme.spacing.sectionHorizontal}px`};
  `};
`;
exports.DarkRightPanel = styled_components_1.default(exports.RightPanel) `
  background-color: ${props => props.theme.rightPanel.backgroundColor};
`;
exports.Row = styled_components_1.default.div `
  display: flex;
  width: 100%;
  padding: 0;

  ${styled_components_1.media.lessThan('medium', true) `
    flex-direction: column;
  `};
`;
