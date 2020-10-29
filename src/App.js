import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  //citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  //lista de citas
  const [citas, setCitas] = useState(citasIniciales);
  // useEffect para hacer operaciones cuando el state cambia
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas)); // en este caso agrego las citas al localStorage
  }, [citas]); // se ejecuta cada que se sucede un cambio en el state de citas

  const agregarCitas = (cita) => {
    setCitas([...citas, cita]);
  };

  //elimina la cita por medio de su id
  const eliminarCita = (id) => {
    const citasBuffer = citas.filter((cita) => cita.id !== id);
    setCitas(citasBuffer);
  };
  const tituloCitas =
    citas.length === 0 ? "No hay citas" : "Administra tus citas";
  return (
    <Fragment>
      <h1> Administrador de pacientes </h1>
      <div className="container">
        <div className="one-half column">
          <Formulario agregarCitas={agregarCitas} />
        </div>
        <div className="one-half column">
          <h2>{tituloCitas}</h2>
          {citas.map((cita) => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
