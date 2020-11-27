import React, { Component } from "react";
import Paisaje from "../assests/images/fondo.png";
import { NavLink } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <img src={Paisaje} className="myImage" alt="Paisaje" />

        {/*Menu*/}
        <nav id="menu">
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Viajes">
                Viajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Reserva">
                Reserva
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Hoteles">
                Hoteles
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
