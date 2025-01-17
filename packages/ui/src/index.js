import { clearFix } from 'polished';
import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as constants from './constants';
import * as mixins from './mixins';
import resetAntStyles from './antd';

// Data
import * as footerData from './components/footer/footer.data';
import * as headerData from './components/header/header.data';
// Utils
import * as headerUtils from './components/header/header.utils';
import { nav } from './utils';

export const getData = (domain, path) => {
  const urlPrefixRegexp = nav.buildUrlPrefixPattern(domain, path);

  const { navItems: footerNavItems, ...restFooterData } = footerData;
  const { navItems: headerNavItems, ...restHeaderData } = headerData;

  return {
    footer: {
      navItems: nav.replaceNavLinks(footerNavItems, urlPrefixRegexp),
      ...restFooterData,
    },
    header: {
      navItems: nav.replaceNavLinks(headerNavItems, urlPrefixRegexp),
      ...restHeaderData,
    },
  };
};

export const utils = {
  header: headerUtils,
};

export { colors, constants, mixins };
export { ActivityCards, Footer, Header, ViewMoreButton } from './components';

export const createAppGlobalStyle = () => createGlobalStyle`
  html,
  body {
    font-family: 'Titillium Web', 'Helvetica Neue', Arial, sans-serif;
    &:lang(zh-CN) {
      font-family: 'Noto Sans', 'Noto Sans CJK', 'Helvetica Neue', Arial, sans-serif;
    }
    color: ${colors.F1};
    font-size: 16px;
    line-height: 1.75;
    --antd-wave-shadow-color: ${colors.B1};
  }

  &::selection {
    background: ${colors.B1};
  }

  #__next {
    .clearfix {
      ${clearFix()};
    }

    ${resetAntStyles};
  }
`;
