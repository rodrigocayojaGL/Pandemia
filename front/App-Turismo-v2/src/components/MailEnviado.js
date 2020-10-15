import React, { Component } from "react";

export default class MailEnviado extends Component {
  state = {
    codigo: Math.floor(Math.random() * 1000000000),
  };
  componentDidMount() {
    var payload = {
      idTransporte: this.props.match.params.transporte,
      idHotel: this.props.match.params.hotel,
      estado: "PENDIENTE",
      dni: this.props.match.params.hotel,
      correo: this.props.match.params.correo,
      codigo: this.state.codigo,
    };
    const pathPost = `http://localhost:8091/reserva`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };
    fetch(pathPost, requestOptions);
  }

  render() {
    return (
      <section>
        <h2 className="subHeader">Enviado Correctamente </h2>
        <p>
          En breves recibira un mail, con los datos de la reserva, <br></br>Su
          codigo es: {this.state.codigo}
        </p>
      </section>
    );
  }
}
