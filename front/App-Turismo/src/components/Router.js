import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Viajes from "./Viajes";
import Consulta from "./Consulta";
import ComoPagar from "./ComoPagar";
import Contacto from "./Contacto";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Viajes" component={Viajes} />
          <Route exact path="/Consulta" component={Consulta} />
          <Route exact path="/ComoPagar" component={ComoPagar} />
          <Route exact path="/Contacto" component={Contacto} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
