import { useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";
import { colaboradores } from "./db";

function App() {
  const [usuarios, setUsuarios] = useState(colaboradores)
  const [palabra, setPalabra] = useState('')
  return (
    <div className="container">
      <h1 className="text-center">Base de Datos de Colaboradores</h1>
      <hr />
      <Buscador usuarios={usuarios} setUsuarios={setUsuarios} palabra={palabra} setPalabra={setPalabra}/>
      <hr />
      <Formulario usuarios={usuarios}  setUsuarios={setUsuarios}/>
      <hr />
      <Tabla usuarios={usuarios} palabra={palabra} />
    </div>
  );
}

export default App;
