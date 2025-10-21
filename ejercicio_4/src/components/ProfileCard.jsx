import React from 'react';
import PropTypes from 'prop-types';

function ProfileCard({ usuario }) {
  if (!usuario) return null;

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex">
          <img
            src={usuario.avatarUrl}
            alt={usuario.nombre}
            className="rounded-circle me-3"
            style={{ width: 72, height: 72, objectFit: 'cover' }}
          />
          <div>
            <h4 className="mb-0">{usuario.nombre}</h4>
            <small className="text-muted">{usuario.email}</small>
          </div>
        </div>

        <hr />

        <h6>Información de Contacto</h6>
        <p className="mb-1"><strong>Calle:</strong> {usuario.direccion.calle}</p>
        <p className="mb-3"><strong>Ciudad:</strong> {usuario.direccion.ciudad}</p>

        <h6>Aficiones</h6>
        <div>
          {usuario.aficiones.map((a, idx) => (
            <span key={idx} className="badge rounded-pill me-2 mb-1" style={{backgroundColor:'#e9ecef'}}>
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  usuario: PropTypes.object
};

export default ProfileCard;
