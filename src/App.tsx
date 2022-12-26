import React from 'react';

import './App.css';
import Reminder from 'models/reminder';
import { ReminderList } from 'components';

const reminders: Reminder[] = [
  { id: 1, title: 'Reminder 1' },
  { id: 2, title: 'Reminder 2' },
];

function App() {
  return <ReminderList items={reminders} />;
}

export default App;
