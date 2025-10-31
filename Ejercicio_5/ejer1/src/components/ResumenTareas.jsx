export default function ResumenTareas({ tareas, total }) {
  const completadas = tareas.every(t => t.completada);

  if (tareas.length === 0) {
    return <p className="text-center text-danger">No hay tareas para este filtro.</p>;
  }

  if (completadas) {
    return <p className="text-center text-success fw-bold">
       ¡Felicidades! Has completado todas las tareas de esta sección.
    </p>;
  }

  return (
    <p className="text-center">
      Mostrando {tareas.length} de {total} tareas.
    </p>
  );
}
