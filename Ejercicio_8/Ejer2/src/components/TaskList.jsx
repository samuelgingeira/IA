import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <ul>
      {tasks.map(t => <TaskItem key={t.id} task={t} />)}
    </ul>
  );
}
