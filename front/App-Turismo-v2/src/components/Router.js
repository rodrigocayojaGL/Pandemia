import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reserva from "./Reserva";
import Viajes from "./Viajes";
import Hotel from "./Hotel";
import Hoteles from "./Hoteles";
import Provinicia from "./Provinicia";
import Contacto from "./Contacto";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";

export default class Router extends Component {
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Viajes} />
          <Route exact path="/Reserva" component={Reserva} />
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
