import React from 'react';

import ToggleMuteButton from './CallControlButtons/ToggleMuteButton';
import ToggleHoldButton from './CallControlButtons/ToggleHoldButton';
import HangupButton from './CallControlButtons/HangupButton';

const MyToolsCallControls = (props) => {
  return (
    <div className='my-tools-call-controls'>
      <ToggleMuteButton {...props} />
      <ToggleHoldButton {...props} />
      <HangupButton {...props} />
    </div>
  )
};

export default MyToolsCallControls;
