import React from 'react';
import { Actions } from '@twilio/flex-ui';
import Button from '@material-ui/core/Button';
import Mic from '@material-ui/icons/Mic';
import MicOff from '@material-ui/icons/MicOff';

const ToggleMuteButton = (props) => {
  const { isCallMuted } = props;

  const handleClick = () => {
    Actions.invokeAction('ToggleMute');
  }

  return (
    <Button
      variant='contained'
      color='secondary'
      startIcon={isCallMuted ? <MicOff /> : <Mic />}
      onClick={handleClick}
      className='call-control-button'
    >
      {isCallMuted ? 'Unmute' : 'Mute'}
    </Button>
  )
}

export default ToggleMuteButton;
