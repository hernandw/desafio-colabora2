import React, { useState } from "react";
import Error from "./Error";
import {getId} from '../helpers/getId'

const Formulario = ({usuarios, setUsuarios}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false)

  const handleSubmit = e =>{
    e.preventDefault()
// Validar el formulario
if([name, email].includes('')){
    setError(true)
    return
}
setError(false)
//Guardar los datos en un objeto
const objetoUsuario = {
    name,
    email,
    id: getId()
}
// Guardamos en el array
setUsuarios([...usuarios, objetoUsuario])
// seteamos el formulario
setName('')
setEmail('')
  }
  return (
    <div>
      <h2>Agregar Colaboradores</h2>
      <form onSubmit={handleSubmit}>
      {error && <Error  message='Todos los campos son obligatorios'/>}
        <div className="mb-3">
          <label htmlFor="name">Nombre</label>
          <input
            className="form-control w-50"
            type="text"
            placeholder="agrega tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            className="form-control w-50"
            type="email"
            placeholder="agrega tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-success">Agrega colaborador</button>
      </form>
    </div>
  );
};

export default Formulario;
