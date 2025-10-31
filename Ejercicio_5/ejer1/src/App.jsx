import { useState } from 'react';
import Filtros from './components/Filtros';
import ListaTareas from './components/ListaTareas';
import ResumenTareas from './components/ResumenTareas';
import 'bootstrap/dist/css/bootstrap.min.css';

const tareasIniciales = [
  { id: 1, texto: 'Aprender sobre listas en React', completada: true, prioridad: 'alta' },
  { id: 2, texto: 'Estudiar useState y props', completada: false, prioridad: 'media' },
  { id: 3, texto: 'Organizar el código del proyecto', completada: false, prioridad: 'baja' },
  { id: 4, texto: 'Practicar filtrado dinámico', completada: true, prioridad: 'alta' }
];

export default function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState('todas');

  const cambiarEstadoTarea = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const tareasFiltradas = tareas.filter(t => 
    filtro === 'todas' ? true : t.prioridad === filtro
  );

  return (
    <div className="container p-4">
      <h1 className="text-center mb-4">📌 Dashboard de Tareas</h1>
      
      <Filtros filtro={filtro} setFiltro={setFiltro} />
      
      <ListaTareas tareas={tareasFiltradas} toggleTarea={cambiarEstadoTarea} />
      
      <ResumenTareas tareas={tareasFiltradas} total={tareas.length} />
    </div>
  );
}
