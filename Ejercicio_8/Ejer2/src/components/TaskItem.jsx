import React, { useContext, useCallback } from 'react';
import { TasksContext } from '../context/TasksContext';
import { AuthContext } from '../context/AuthContext';

function _TaskItem({ task }) {
  const { dispatch } = useContext(TasksContext);
  const { user } = useContext(AuthContext);

  const canEdit = user.name === task.author && user.name !== 'Invitado';

  const toggle = useCallback(() => dispatch({ type: 'TOGGLE', payload: task.id }), [dispatch, task.id]);
  const remove = useCallback(() => dispatch({ type: 'REMOVE', payload: task.id }), [dispatch, task.id]);

  return (
    <li style={{opacity: canEdit ? 1 : 0.6}}>
      <span>{task.text} — <small>{task.author}</small></span>
      <button onClick={toggle} disabled={!canEdit}>{task.completed ? 'Desmarcar' : 'Completar'}</button>
      <button onClick={remove} disabled={!canEdit}>Eliminar</button>
    </li>
  );
}

export default React.memo(_TaskItem, (prev, next) => prev.task === next.task);
