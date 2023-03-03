import React, { useState } from "react";

const Buscador = ({ usuarios, setUsuarios, palabra, setPalabra }) => {
  
  

  return (
    <div className="mb-5">
      <h2>Busqueda de Colaboradores</h2>
      <input
        className="form-control w-50"
        type="text"
        placeholder="buscar..."
        value={palabra}
        onChange={(e) => setPalabra(e.target.value)}
      />
    </div>
  );
};

export default Buscador;
