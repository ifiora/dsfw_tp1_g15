import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <h1>Trabajo Practico Grupal DSWF - Grupo 15</h1>

        <div className="caratula">
          <ul>
            <li>Pablo Bari</li>
            <li>Javier Dojas</li>
            <li>Ignacio Fiora</li>
          </ul>

          <ul>
            <li className="title">Materia:</li>
            <li className="indent">Desarrollo de Sistemas Web (Frontend)</li>
            <li className="title">Profesor:</li>
            <li className="indent">Luciano Ariel Martinez</li>
          </ul>
        </div>
      </section>
    );
  }
}
