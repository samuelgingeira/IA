import React from "react";

export default function ContactoForm() {
  return (
    <section className="container py-5">
      <h2 className="mb-4">Formulario de contacto</h2>
      <form
        name="contacto"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contacto" />

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            name="mensaje"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
    </section>
  );
}
