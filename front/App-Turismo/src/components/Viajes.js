import React, { Component } from "react";

export default class Viajes extends Component {
  state = {
    packetes: [],
  };

  componentDidMount() {
    const pathViajes = `http://localhost:8090/provincia`;

    fetch(pathViajes)
      .then((response) => response.json())
      .then((result) => this.setState({ packetes: result.packetes }));
    console.log(pathViajes);
  }

  render() {
    const { packetes } = this.state;
    console.log(packetes);
    return (
      <div className="margin">
        <ul>
          {packetes.map((item) => (
            <ul key={item.nombre}>
              <div className="header">{item.nombre}</div>
              {item.ciudades.map((i) => (
                <div key={item.nombre}>
                  {i.nombre}
                  <a href="image">
                    <img
                      className="myImagePaisaje"
                      src={i.imagen}
                      alt={i.nombre}
                      title={i.nombre}
                    />
                  </a>
                </div>
              ))}
            </ul>
          ))}
        </ul>
      </div>
    );
  }
}
