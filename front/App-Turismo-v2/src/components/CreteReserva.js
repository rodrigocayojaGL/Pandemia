import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class CreateReserva extends Component {
  state = {
    packetes: [],
  };

  handleChange(e) {
    this.setState({ correo: e.target.value });
    console.log("CHANGE 1: " + this.state.correo);
  }
  handleChanges(e) {
    this.setState({ dni: e.target.value });
    console.log("CHANGE 2: " + this.state.dni);
  }

  componentDidMount() {
    const pathTransporte =
      `http://localhost:8091/reserva/ciudad/` +
      this.props.match.params.ciudad +
      "/hotel/" +
      this.props.match.params.hotel +
      "/transporte/" +
      this.props.match.params.transporte;

    fetch(pathTransporte)
      .then((response) => response.json())
      .then((result) => this.setState({ packetes: result.packetes }));
    console.log("ReservaCHT:" + pathTransporte);
  }
  render() {
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    const { packetes } = this.state;
    return (
      <div>
        <div className="margin50">
          <p>
            Correo:
            <input
              type="text"
              name="Correo"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            Dni:
            <input
              type="text"
              name="Dni"
              required
              onChange={this.handleChanges}
            />
          </p>
          <p>
            Sexo:
            <input type="radio" name="hm" value="h" required /> Hombre
            <input type="radio" name="hm" value="m" required /> Mujer
          </p>

          <NavLink
            to={`/MailEnviado/${this.props.match.params.ciudad}/${this.props.match.params.hotel}/${this.props.match.params.transporte}
            /${this.state.dni}/${this.state.correo}`}
          >
            <input type="submit" value="Enviar la información" />
          </NavLink>
        </div>
        {packetes.map((i) => (
          <div key={i.idCiudad} className="galleryHotel">
            <h2 className="subrayado">Reserva</h2>
            <dl className="margin20">
              <dd className="margin20">
                Provincia: {i.provincia} - Ciudad:{i.ciudad}
              </dd>
              <dd className="margin20">
                Hotel: {i.hotel} - Precio:{i.precioHotel}
              </dd>
              <dd className="margin20">
                Transporte: {i.tipo} - Precio:{i.precioTipo}
              </dd>
            </dl>
          </div>
        ))}
      </div>
    );
  }
}
