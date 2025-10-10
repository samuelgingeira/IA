import React from 'react'

export default function TopNavbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#1f7a2f'}}>
      <div className="container">
        <a className="navbar-brand" href="#">Naturaleza Viva</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Recursos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
