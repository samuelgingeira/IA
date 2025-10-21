import React from 'react';
import PropTypes from 'prop-types';

function UserList({ usuarios, usuarioSeleccionadoId, onSeleccionarUsuario }) {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">Lista de Usuarios</h5>
      </div>
      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          {usuarios.map((u) => (
            <li
              key={u.id}
              className={
                'list-group-item d-flex align-items-center ' +
                (usuarioSeleccionadoId === u.id ? 'active text-white' : '')
              }
              style={{ cursor: 'pointer' }}
              onClick={() => onSeleccionarUsuario(u.id)}
            >
              {u.nombre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

UserList.propTypes = {
  usuarios: PropTypes.array.isRequired,
  usuarioSeleccionadoId: PropTypes.string,
  onSeleccionarUsuario: PropTypes.func.isRequired
};

export default UserList;
