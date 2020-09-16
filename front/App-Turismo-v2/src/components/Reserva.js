import React, { Component } from "react";

export default class Reserva extends Component {
  render() {
    return (
      <div className="margin">
        <p>
          Nombre: <input type="text" name="nombre" required />
        </p>

        <p>
          Sexo:
          <input type="radio" name="hm" value="h" required /> Hombre
          <input type="radio" name="hm" value="m" required /> Mujer
        </p>

        <input type="submit" value="Enviar la información" />
      </div>
    );
  }
}
