import React from 'react';
import { Actions, withTaskContext } from '@twilio/flex-ui';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const MyToolsActivitySelector = (props) => {
  const {selectedActivity, sortedActivities} = props;
  const availableActivities = sortedActivities?.filter(a => a.available === true);
  const unavailableActivities = sortedActivities?.filter(a => a.available === false);

  const handleChange = (event) => {
    const activitySid = event?.target?.value;
    console.debug('Activity selected:', activitySid);

    Actions.invokeAction('SetActivity', { activitySid });
  }

  return (
    <div className='my-tools-activity-selector'>
      <FormControl variant='outlined' fullWidth>
        <InputLabel id='activity-selector-label'>Select your activity</InputLabel>
        <Select
          labelId='activity-selector-label'
          label='Select your activity'
          id='activity-selector'
          value={selectedActivity?.sid}
          onChange={handleChange}
        >
          <ListSubheader>Available Activities</ListSubheader>
          {availableActivities?.map(({ name, sid }) => 
            <MenuItem key={sid} value={sid}>{name}</MenuItem>
          )}
          <ListSubheader>Unavailable Activities</ListSubheader>
          {unavailableActivities?.map(({ name, sid }) => 
            <MenuItem key={sid} value={sid}>{name}</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  )
}

export default withTaskContext(MyToolsActivitySelector);
