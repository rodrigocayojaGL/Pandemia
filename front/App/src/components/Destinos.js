import React from "react";

const Destino = (props) => {
  const { name, edad, dni, lastName } = props.destino;
  console.log("Destinoss" + props.destino);
  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4">
      <div className="card">
        <ul>
          <li>Nombre: {name}</li>
          <li>Apelllido: {lastName}</li>
          <li>Edad: {edad}</li>
          <li>Dni: {dni}</li>
        </ul>
      </div>
    </div>
  );
};

export default Destino;
