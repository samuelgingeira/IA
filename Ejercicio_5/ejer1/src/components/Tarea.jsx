const colores = {
  alta: 'danger',
  media: 'warning',
  baja: 'success'
};

export default function Tarea({ tarea, toggleTarea }) {
  return (
    <li
      className={`list-group-item d-flex align-items-center justify-content-between 
      ${tarea.completada ? 'bg-light text-decoration-line-through' : ''}`}
    >
      <span 
        style={{ cursor: 'pointer' }}
        onClick={() => toggleTarea(tarea.id)}
      >
        {tarea.texto}
      </span>

      <span 
        className={`badge rounded-pill bg-${colores[tarea.prioridad]}`}
      >
        {tarea.prioridad.toUpperCase()}
      </span>
    </li>
  );
}
