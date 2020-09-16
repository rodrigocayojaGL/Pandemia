import React, { Component } from "react";
import Contactos from "../assests/images/Contactos.png";

export default class Contacto extends Component {
  render() {
    return (
      <div className="margin">
        <img src={Contactos} alt="Conctactos" />
      </div>
    );
  }
}
