import React from 'react';
import { Header, data, utils } from '@tidb-community/ui';

import { getTitle } from '../utils';

export default {
  title: getTitle('Header'),
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const WithNav = Template.bind({});

const title = 'Community';
const { navItems } = data.header;

WithNav.args = {
  navItems,
  title,
  currentNav: utils.header.getCurrentNav(navItems, 'https://contributor.tidb.io/people/committer'),
  logo: <img alt={title} src="/images/community/logo.svg" />,
};
