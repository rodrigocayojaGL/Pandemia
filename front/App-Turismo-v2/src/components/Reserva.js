import React, { Component } from "react";

export default class Reserva extends Component {
  state = {
    idReserva: Number,
    ciudad: String,
    hotel: String,
    precioHotel: Number,
    tipo: String,
    precioTipo: Number,
    estado: String,
  };

  constructor(props) {
    super(props);
    this.state = { value: "", isLoggedIn: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.componentDidMount();
  }

  componentDidMount(event) {
    const pathHotel = `http://localhost:8091/reserva/` + this.state.value;

    fetch(pathHotel)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          hotel: result.hotel,
          precioHotel: result.precioHotel,
          tipo: result.tipo,
          precioTipo: result.precioTipo,
          estado: result.estado,
          ciudad: result.hotel,
        })
      );
    console.log("RESREV:" + pathHotel);
  }
  render() {
    const { ciudad, hotel, precioHotel, tipo, precioTipo, estado } = this.state;

    return (
      <div>
        <form className="busqueda" onSubmit={this.handleSubmit}>
          <label className="margin20">
            Codigo Reserva :
            <input
              className="left50"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {ciudad ? (
          <div className="busquedaInfo">
            <h2 className="subrayado">Reserva</h2>
            <dl className="margin20">
              <dt className="margin20">Ciudad: {ciudad}</dt>
              <dt className="margin20">
                Hotel: {hotel} - Precio: ${precioHotel}
              </dt>
              <dt className="margin20">
                Transporte: {tipo} - Precio: ${precioTipo}
              </dt>
              <dt className="margin20">Estado: {estado}</dt>
            </dl>
          </div>
        ) : (
          <div className="busquedaInfo">
            <h2 className="subHeader">No existe reserva </h2>
            <p>El codigo {this.state.value} no existe en los registros</p>
          </div>
        )}
      </div>
    );
  }
}
