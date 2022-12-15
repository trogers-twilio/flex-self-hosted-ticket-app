import React from 'react';
import * as Flex from '@twilio/flex-ui';

import MyTools from '../../../components/MyTools';

export const loadComponentHooks = (manager) => {
  Flex.AgentDesktopView.defaultProps.showPanel2 = false;

  Flex.MainContainer.Content.remove('sidenav');
  Flex.MainHeader.Content.remove('sidenav-button');
  Flex.MainHeader.Content.remove('logo');

  Flex.RootContainer.Content.replace(<MyTools key="my-tools" />);
}