import React, { Component } from "react";
import "./assests/css/App.css";
import Router from "./components/Router";

//Importar componentes

class App extends Component {
  render() {
    console.log("ENVIADO PROP" + this.props.children);
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
