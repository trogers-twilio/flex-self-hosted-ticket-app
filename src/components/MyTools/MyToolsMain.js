import React from 'react';
import { TaskHelper, withTaskContext } from '@twilio/flex-ui';

import MyToolsIdlePanel from './MyToolsIdlePanel';
import MyToolsCallControls from './MyToolsCallControls';
import MyToolsWrappingTask from './MyToolsWrappingTask';
import MyToolsInfoPanel from './MyToolsInfoPanel';

const MyToolsMain = (props) => {
  const { selectedTask } = props;

  return (
    <div className='my-tools-main'>
      {selectedTask
        ? TaskHelper.isInWrapupMode(selectedTask)
          ? <React.Fragment>
              <MyToolsWrappingTask {...props} />
              <MyToolsInfoPanel {...props} />
            </React.Fragment>
          : TaskHelper.isCallTask(selectedTask)
            ? <React.Fragment>
                <MyToolsCallControls {...props} />
                <MyToolsInfoPanel {...props} />
              </React.Fragment>
            : <div>Unhandled Task Type</div>
        : <MyToolsIdlePanel {...props} />
      }
    </div>
  )
}

export default withTaskContext(MyToolsMain);
