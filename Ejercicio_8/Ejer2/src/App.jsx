import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { TasksProvider } from './context/TasksContext';
import UserSelect from './components/UserSelect';
import UserInfo from './components/UserInfo';
import TaskList from './components/TaskList';

export default function App(){
  return (
    <AuthProvider>
      <TasksProvider>
        <header style={{display:'flex', justifyContent:'space-between'}}>
          <UserSelect />
          <UserInfo />
        </header>
        <main>
          <TaskList />
        </main>
      </TasksProvider>
    </AuthProvider>
  );
}
