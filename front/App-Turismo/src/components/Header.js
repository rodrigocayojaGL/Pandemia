import React, { Component } from "react";
import Paisaje from "../assests/images/Paisaje.png";
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
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Viajes">
                Viajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Consulta">
                ¿Constulta?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ComoPagar">
                ¿Cómo pagar?
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
