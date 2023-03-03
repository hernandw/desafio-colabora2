import React, { useState } from "react";
import TableRow from "./TableRow";

const Tabla = ({ usuarios }) => {
  const [palabra, setPalabra] = useState("");
  let results = [];
  if (!palabra) {
    results = usuarios;
  } else {
    results = usuarios.filter(
      (user) =>
        user.name.toLowerCase().includes(palabra.toLowerCase()) ||
        user.email.toLowerCase().includes(palabra.toLowerCase())
    );
  }

  return (
    <div>
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
      <h2 className="mb-4">Lista de Colaboradores</h2>

      <table className="table table-striped table-hover mt- shadow-lg ">
        <thead className="bg-success text-white">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((user) => <TableRow key={user.id} user={user} />)
          ) : (
            <tr>
              <td>No hay resultados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
