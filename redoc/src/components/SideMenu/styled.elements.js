"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classnames = require("classnames");
const polished_1 = require("polished");
const common_elements_1 = require("../../common-elements");
const styled_components_1 = require("../../styled-components");
exports.OperationBadge = styled_components_1.default.span.attrs((props) => ({
    className: `operation-type ${props.type}`,
})) `
  width: 32px;
  display: inline-block;
  height: ${props => props.theme.typography.code.fontSize};
  line-height: ${props => props.theme.typography.code.fontSize};
  background-color: #333;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 7px;
  font-family: Verdana; // web-safe
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;

  &.get {
    background-color: ${props => props.theme.colors.http.get};
  }

  &.post {
    background-color: ${props => props.theme.colors.http.post};
  }

  &.put {
    background-color: ${props => props.theme.colors.http.put};
  }

  &.options {
    background-color: ${props => props.theme.colors.http.options};
  }

  &.patch {
    background-color: ${props => props.theme.colors.http.patch};
  }

  &.delete {
    background-color: ${props => props.theme.colors.http.delete};
  }

  &.basic {
    background-color: ${props => props.theme.colors.http.basic};
  }

  &.link {
    background-color: ${props => props.theme.colors.http.link};
  }

  &.head {
    background-color: ${props => props.theme.colors.http.head};
  }
`;
function menuItemActiveBg(depth, { theme }) {
    if (depth > 1) {
        return polished_1.darken(0.1, theme.menu.backgroundColor);
    }
    else if (depth === 1) {
        return polished_1.darken(0.05, theme.menu.backgroundColor);
    }
    else {
        return '';
    }
}
exports.MenuItemUl = styled_components_1.default.ul `
  margin: 0;
  padding: 0;

  & & {
    font-size: 0.929em;
  }

  ${props => (props.expanded ? '' : 'display: none;')};
`;
exports.MenuItemLi = styled_components_1.default.li `
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${props => (props.depth === 0 ? 'margin-top: 15px' : '')};
`;
exports.menuItemDepth = {
    0: styled_components_1.css `
    opacity: 0.7;
    text-transform: ${({ theme }) => theme.menu.groupItems.textTransform};
    font-size: 0.8em;
    padding-bottom: 0;
    cursor: default;
    color: ${props => props.theme.menu.textColor};
  `,
    1: styled_components_1.css `
    font-size: 0.929em;
    text-transform: ${({ theme }) => theme.menu.level1Items.textTransform};
    &:hover {
      color: ${props => props.theme.colors.primary.main};
    }
  `,
    2: styled_components_1.css `
    color: ${props => props.theme.menu.textColor};
  `,
};
exports.MenuItemLabel = styled_components_1.default.label.attrs((props) => ({
    role: 'menuitem',
    className: classnames('-depth' + props.depth, {
        active: props.active,
    }),
})) `
  cursor: pointer;
  color: ${props => (props.active ? props.theme.colors.primary.main : props.theme.menu.textColor)};
  margin: 0;
  padding: 12.5px ${props => props.theme.spacing.unit * 4}px;
  ${({ depth, type, theme }) => (type === 'section' && depth > 1 && 'padding-left: ' + theme.spacing.unit * 8 + 'px;') || ''}
  display: flex;
  justify-content: space-between;
  font-family: ${props => props.theme.typography.headings.fontFamily};
  ${props => exports.menuItemDepth[props.depth]};
  background-color: ${props => (props.active ? menuItemActiveBg(props.depth, props) : '')};

  ${props => (props.deprecated && common_elements_1.deprecatedCss) || ''};

  &:hover {
    background-color: ${props => menuItemActiveBg(props.depth, props)};
  }

  ${common_elements_1.ShelfIcon} {
    height: ${({ theme }) => theme.menu.arrow.size};
    width: ${({ theme }) => theme.menu.arrow.size};
    polygon {
      fill: ${({ theme }) => theme.menu.arrow.color};
    }
  }
`;
exports.MenuItemTitle = styled_components_1.default.span `
  display: inline-block;
  vertical-align: middle;
  width: ${props => (props.width ? props.width : 'auto')};
  overflow: hidden;
  text-overflow: ellipsis;
`;
exports.RedocAttribution = styled_components_1.default.div `
  ${({ theme }) => `
  font-size: 0.8em;
  margin-top: ${theme.spacing.unit * 2}px;
  padding: 0 ${theme.spacing.unit * 4}px;
  text-align: left;

  opacity: 0.7;

  a,
  a:visited,
  a:hover {
    color: ${theme.menu.textColor} !important;
    border-top: 1px solid ${polished_1.darken(0.1, theme.menu.backgroundColor)};
    padding: ${theme.spacing.unit}px 0;
    display: block;
  }
`};
`;
