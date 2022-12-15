import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

const MyToolsIdlePanel = (props) => {
  const { selectedActivity } = props;

  return (
    <div className='my-tools-idle-panel'>
      {selectedActivity?.name === 'Offline'
        ? <h5 id='offline-message'>Select an Available activity to begin taking calls</h5>
        : selectedActivity?.available === true
          ? <h5 id='idle-message'>Ready for calls</h5>
          : <h5 id='unavailable-message'>{selectedActivity.name}</h5>
      }
    </div>
  )
}

export default withTaskContext(MyToolsIdlePanel);
