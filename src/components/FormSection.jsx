import React from 'react'

export default function FormSection(){
  return (
    <section className="container section-padding form-section rounded-3">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto">
          <h2 className="mb-4" style={{color:'#177a3a'}}>Solicita más información</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre completo</label>
              <input id="name" className="form-control" placeholder="Tu nombre" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input id="email" type="email" className="form-control" placeholder="nombre@ejemplo.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea id="message" className="form-control" rows="5" placeholder="Escribe tu consulta aquí..."></textarea>
            </div>
            <button type="submit" className="btn btn-success">Enviar solicitud</button>
          </form>
        </div>
      </div>
    </section>
  )
}
