import React, { useState, useMemo } from 'react';
import UserList from './components/UserList';
import ProfileCard from './components/ProfileCard';
import { usuarios as datosUsuarios } from './datos/usuarios';

function App() {
  const [usuarios] = useState(datosUsuarios);
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);
  const [filtro, setFiltro] = useState('');

  const usuariosFiltrados = useMemo(() => {
    const q = filtro.trim().toLowerCase();
    if (!q) return usuarios;
    return usuarios.filter((u) => u.nombre.toLowerCase().includes(q));
  }, [usuarios, filtro]);

  const usuarioSeleccionado = useMemo(() => {
    return usuarios.find((u) => u.id === usuarioSeleccionadoId) || null;
  }, [usuarios, usuarioSeleccionadoId]);

  return (
    <div className="container py-4">
      <div className="card mb-4 bg-dark text-white">
        <div className="card-body">
          <h3 className="mb-0">Gestor de Perfiles de Usuario</h3>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-4">
          <div className="mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Buscar usuario..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            />
          </div>

          <UserList
            usuarios={usuariosFiltrados}
            usuarioSeleccionadoId={usuarioSeleccionadoId}
            onSeleccionarUsuario={(id) => setUsuarioSeleccionadoId(id)}
          />
        </div>

        <div className="col-md-8">
          {usuarioSeleccionado ? (
            <ProfileCard usuario={usuarioSeleccionado} />
          ) : (
            <div className="alert alert-info">Selecciona un usuario para ver los detalles</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
