import React from 'react';
import logo from './assests/images/logo.svg';
import './assests/css/App.css';

//Importar componentes
import MyCoponent from "./components/MyComponent";

function HolaMundo (type, ide) {
  var presentacionFunction = (
  <div>
    <h3>Function {type}</h3>
    <h3>by {ide}</h3>
  </div>);
  return presentacionFunction;
}
function App() {
  //variables
  var ide = "visual studio"
  var type = "de frontEnd"
  var nombre = "Rodrigo Choque"
  var presentacion = <h2>Hola, soy {nombre}</h2>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {presentacion}
        {HolaMundo(type,ide)}
        {alert("Bienvenido")}
        <p>
          <code>REACT</code>
        </p>
      </header>
      <section className="component">
        <MyCoponent/>
      </section>
    </div>
  );
}

export default App;
