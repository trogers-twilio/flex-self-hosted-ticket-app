import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

import MyToolsActivitySelector from './MyToolsActivitySelector';

const MyToolsHeader = (props) => {
  return (
    <div className='my-tools-header'>
      <MyToolsActivitySelector {...props} />
    </div>
  )
}

export default withTaskContext(MyToolsHeader);
