import React from 'react';
import EventCalendar from '../../components/EventCalendar';
import dayjs from 'dayjs';
import {asdasd} from '../../components/tmp';

function Test() {
  return (
    <EventCalendar style={{width: 320}} value={dayjs()} activity={asdasd()} />
  );
}

export default Test;
