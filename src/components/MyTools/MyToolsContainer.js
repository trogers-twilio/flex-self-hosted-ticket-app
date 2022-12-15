/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StateHelper, TaskHelper } from '@twilio/flex-ui';

import { selectActiveTask } from '../../twilio-flex/helpers';

import MyToolsHeader from './MyToolsHeader';
import MyToolsMain from './MyToolsMain';

const MyToolsContainer = (props) => {
  useEffect(() => {
    selectActiveTask(props.tasks);
  }, []);

  return (
    <div className='my-tools-container bg-light'>
      <MyToolsHeader {...props} />
      <MyToolsMain {...props} />
    </div>
  )
};

const mapStateToProps = (state) => {
  const callState = StateHelper.getCurrentPhoneCallState();
  const isCallMuted = callState?.isMuted();

  const view = state?.flex?.view;
  const worker = state?.flex?.worker;

  const tasks = worker?.tasks;
  const selectedTaskSid = view?.selectedTaskSid;
  const selectedTask = tasks?.get(selectedTaskSid);
  const isCallOnHold = selectedTask && TaskHelper.isCallOnHold(selectedTask);

  const selectedActivity = worker?.activity;
  const workerActivities = worker?.activities || new Map();
  const activities = Array.from(workerActivities.values());
  const sortedActivities = activities.sort(
    (a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1
  );
  return {
    isCallMuted,
    isCallOnHold,
    selectedActivity,
    sortedActivities,
    selectedTask,
    tasks
  }
}

export default connect(mapStateToProps)(MyToolsContainer);
