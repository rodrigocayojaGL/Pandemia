import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Viajes extends Component {
  state = {
    ciudades: [],
  };

  componentDidMount() {
    const pathCiudad = `http://localhost:8091/ciudad`;

    fetch(pathCiudad)
      .then((response) => response.json())
      .then((result) => this.setState({ ciudades: result.ciudades }));
    console.log(pathCiudad);
  }
  render() {
    const { ciudades } = this.state;
    console.log(ciudades);
    return (
      <div id="ciudad">
        {ciudades.map((item) => (
          <div key={item.idCiudad} className="gallery">
            <NavLink to={`/Hotel/${item.idCiudad}`}>
              <img src={item.imagen} alt={item.nombre} title={item.nombre} />
            </NavLink>
            <div className="desc">Ciudad: {item.nombre}</div>
          </div>
        ))}
      </div>
    );
  }
}
