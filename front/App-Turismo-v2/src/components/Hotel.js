import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Hotel extends Component {
  state = {
    hoteles: [],
  };

  componentDidMount() {
    const pathHotel =
      `http://localhost:8091/hotel/` + this.props.match.params.hotel;

    fetch(pathHotel)
      .then((response) => response.json())
      .then((result) => this.setState({ hoteles: result.hoteles }));
    console.log("HOTEL:" + pathHotel);
  }

  render() {
    console.log(this.props.match.params.hotel);
    const { hoteles } = this.state;
    console.log(hoteles);

    return (
      <div id="Hotel">
        {hoteles.map((i) => (
          <div key={i.idHotel} className="galleryHotel">
            <NavLink to={`/transporte/${i.idHotel}/${i.idCiudad}`}>
              <h2 className="subrayado">Hotel</h2>
              <dl className="margin20">
                <dt className="margin20">Nombre:</dt>
                <dd>{i.nombre}</dd>
                <dt className="margin20">Calidad:</dt>
                <dd>{i.calidad}</dd>
                <dt className="margin20">Precio:</dt>
                <dd>$ {i.precio}</dd>
              </dl>
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}
