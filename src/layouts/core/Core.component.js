import * as R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, getData, utils } from '@tidb-community/ui'
import { useRouter } from 'next/router';

import { link as linkUtils } from 'utils';

const Core = ({ domain = 'tug.tidb.io', hasMargin, children }) => {
  const router = useRouter();

  const data = getData(domain);
  const { navItems: headerNavItems } = data.header;
  const { navItems: footerNavItems } = data.footer;

  const title = 'Community';
  const logo = <img alt={title} src="/images/community/logo.svg" />;

  const onNavClick = R.curry(linkUtils.handleRedirect)(router);

  const headerProps = {
    logo,
    title,
    onNavClick,
    navItems: headerNavItems,
    currentNav: utils.header.getCurrentNav(headerNavItems, router.pathname),
    onTitleClick: () => router.push('/community'),
  };

  const footerProps = {
    logo,
    title,
    onNavClick,
    navItems: footerNavItems,
    hasMargin,
  };

  return (
    <>
      <Header {...headerProps} />
      {children}
      <Footer {...footerProps} />
    </>
  );
};

Core.propTypes = {
  domain: PropTypes.string,
  hasMargin: PropTypes.bool,
};

export default Core;
