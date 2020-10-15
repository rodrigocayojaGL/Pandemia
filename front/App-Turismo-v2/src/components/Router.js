import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reserva from "./Reserva";
import CreteReserva from "./CreteReserva";
import Viajes from "./Viajes";
import Hotel from "./Hotel";
import Hoteles from "./Hoteles";
import Provinicia from "./Provinicia";
import Contacto from "./Contacto";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Transporte from "./Transporte";
import MailEnviado from "./MailEnviado";

export default class Router extends Component {
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Viajes} />
          <Route
            exact
            path="/CreteReserva/:ciudad/:hotel/:transporte"
            component={CreteReserva}
          />

          <Route exact path="/Reserva/" component={Reserva} />
          <Route
            exact
            path="/Transporte/:ciudad/:hotel"
            component={Transporte}
          />
          <Route
            exact
            path="/MailEnviado/:ciudad/:hotel/:transporte/:dni/:correo"
            component={MailEnviado}
          />
          <Route exact path="/Viajes" component={Viajes} />
          <Route exact path="/Hotel" component={Hotel} />
          <Route exact path="/Provinicia" component={Provinicia} />
          <Route exact path="/Contacto" component={Contacto} />
          <Route exact path="/Hotel/:hotel" component={Hotel} />
          <Route exact path="/Hoteles" component={Hoteles} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
