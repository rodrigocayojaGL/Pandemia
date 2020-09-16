import React, { Component } from "react";
import "./assests/css/App.css";
import Router from "./components/Router";

//Importar componentes

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
