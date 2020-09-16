import React, { Component } from "react";

export default class Hotel extends Component {
  state = {
    hoteles: [],
    contador: 0,
  };

  aumentar() {
    this.setState({ contador: this.state.contador + 1 });
  }
  componentDidMount() {
    const pathHotel =
      `http://localhost:8091/hotel/` + this.props.match.params.hotel;

    fetch(pathHotel)
      .then((response) => response.json())
      .then((result) => this.setState({ hoteles: result.hoteles }));
    console.log("HOTEL:" + pathHotel);
  }

  render() {
    console.log(this.props.match.params.hotel);
    const { hoteles } = this.state;
    console.log(hoteles);

    return (
      <div id="Hotel">
        {hoteles.map((i) => (
          <div key={i.idHotel} className="galleryHotel">
            <h2 className="subrayado">Hotel</h2>
            <dl className="margin20">
              <dt className="margin20">Nombre:</dt>
              <dd>{i.nombre}</dd>
              <dt className="margin20">Calidad:</dt>
              <dd>{i.calidad}</dd>
              <dt className="margin20">Precio:</dt>
              <dd>$ {i.precio}</dd>
            </dl>
          </div>
        ))}
      </div>
    );
  }
}

/*
<Route
exact
path="/Ciudad/:ciudad"
render={(props) => {
  var id = props.match.params.ciudad;

  return (
    <div id="content">
      <h1>{id}</h1>
    </div>
  );
}}
/>
*/
