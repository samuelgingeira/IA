import React, { createContext, useReducer, useMemo } from 'react';
import { tasksReducer, initialTasks } from '../reducers/tasksReducer';

export const TasksContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const value = useMemo(() => ({ tasks, dispatch }), [tasks, dispatch]);

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}
