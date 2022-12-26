import React, { useState } from 'react';

interface NewReminderProps {
  onAddReminder(title: string): void;
}

function NewReminder({ onAddReminder }: NewReminderProps) {
  const [title, setTitle] = useState<string>('');

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    onAddReminder(title);
    setTitle('');
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        className="form-control"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn btn-primary rounded-pill my-2" type="submit">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
