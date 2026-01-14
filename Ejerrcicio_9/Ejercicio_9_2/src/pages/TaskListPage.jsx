import { Link } from 'react-router-dom';
import { TASKS } from '../data/tasks';

export default function TaskListPage() {
  return (
    <>
      <h2>Lista de Tareas</h2>
      <ul>
        {TASKS.map(task => (
          <li key={task.id}>
            <Link to={`/dashboard/task/${task.id}`}>
              {task.title} ({task.status})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
