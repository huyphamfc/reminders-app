import React, { useState, useEffect } from 'react';

import './App.css';
import Reminder from 'models/reminder';
import { ReminderList } from 'components';
import { reminderService } from 'services';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminders = (id: number) => {
    const updatedReminders = reminders.filter((item) => item.id !== id);
    setReminders(updatedReminders);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return <ReminderList items={reminders} onRemoveReminder={removeReminders} />;
}

export default App;
