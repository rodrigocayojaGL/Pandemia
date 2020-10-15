import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Transporte extends Component {
  state = {
    transporte: [],
  };
  componentDidMount() {
    const pathTransporte =
      `http://localhost:8091/transporte/` + this.props.match.params.ciudad;

    fetch(pathTransporte)
      .then((response) => response.json())
      .then((result) => this.setState({ transporte: result.transporte }));
    console.log("Transporte:" + pathTransporte);
  }
  render() {
    console.log("CIUDAD: " + this.props.match.params.ciudad);
    const { transporte } = this.state;
    console.log("PROP: " + this.props.match.params.hotel);

    return (
      <div key="transporte">
        {transporte.map((i) => (
          <div key={i.idTransporte} className="galleryHotel">
            <h2 className="subrayado">Transporte</h2>
            <dl className="margin20">
              <dt className="margin20">Tipo:</dt>
              <dd>{i.tipo}</dd>
              <dt className="margin20">Precio:</dt>
              <dd>$ {i.precio}</dd>
            </dl>
            <NavLink
              to={`/CreteReserva/${this.props.match.params.ciudad}/${this.props.match.params.hotel}/${i.idTransporte}`}
            >
              <button type="button">Reserva</button>
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}
