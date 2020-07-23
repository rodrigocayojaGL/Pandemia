import React, { Component } from "react";
import "./assests/css/App.css";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    inputRef: "",
    destino: [],
  };

  consultarApi = () => {
    const pathVar = this.state.inputRef;
    const url = `http://localhost:9090/user/test?dni=${pathVar}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => this.setState({ destino: result.user }));

    console.log("URI APP " + url);
    console.log("resul " + this.state.destino);
  };

  datosBusqueda = (inputRef) => {
    this.setState(
      {
        inputRef,
      },
      () => {
        this.consultarApi();
      }
    );
  };
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center" id="title">
            Buscar destinos
          </p>
          <Buscador propMsg={this.datosBusqueda} />
        </div>
        <Resultado destinos={this.state.destino} />
      </div>
    );
  }
}

export default App;
