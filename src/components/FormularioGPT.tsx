import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [signo, setSigno] = useState('');

  function handleSubmit(event:any) {
    event.preventDefault();
    console.log(nombre, edad, genero, signo);
  }

  return (
    <form className="container 10px margin" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={event => setNombre(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          className="form-control"
          id="edad"
          value={edad}
          onChange={event => setEdad(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="genero">Género:</label>
        <input
          type="text"
          className="form-control"
          id="genero"
          value={genero}
          onChange={event => setGenero(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="signo">Signo del zodiaco:</label>
        <input
          type="text"
          className="form-control"
          id="signo"
          value={signo}
          onChange={event => setSigno(event.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
