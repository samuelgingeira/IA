import Tarea from './Tarea';

export default function ListaTareas({ tareas, toggleTarea }) {
  return (
    <ul className="list-group mb-3">
      {tareas.map(t => (
        <Tarea key={t.id} tarea={t} toggleTarea={toggleTarea} />
      ))}
    </ul>
  );
}
