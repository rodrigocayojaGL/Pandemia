import React, { Component } from "react";

export default class Buscador extends Component {
  inputRef = React.createRef();

  handler = (e) => {
    e.preventDefault();
    const inputValue = this.inputRef.current.value;
    this.props.propMsg(inputValue);
  };

  render() {
    return (
      <form onSubmit={this.handler}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.inputRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Buscar tu destino. Ejemplo: Argentina"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn block"
              value="Buscar"
            />
          </div>
        </div>
      </form>
    );
  }
}
