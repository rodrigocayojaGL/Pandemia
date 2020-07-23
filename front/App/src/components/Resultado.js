import React, { Component } from "react";
import Destinos from "./Destinos";

export default class Resultado extends Component {
  mostrarDatos = () => {
    const destin = this.props.destinos;
    console.log("Resultado: " + destin);

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {destin.map((d) => (
            <Destinos key={d.dni} destino={d} />
          ))}
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.mostrarDatos()}</React.Fragment>;
  }
}
