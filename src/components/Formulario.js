import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ agregarCitas }) => {
  // creando el state de las citas
  const [cita, setCita] = useState({
    mascota: "",
    acompanante: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // state de las alertas
  const [error, setError] = useState(false);
  // función que cambia el state de la cita
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  //función que se ejecuta cuando el usuario presiona el botón agregar cita
  const onSubmitCita = (e) => {
    e.preventDefault();

    // validaciones
    if (
      mascota.trim() === "" ||
      acompanante.trim === "" ||
      fecha.trim === "" ||
      hora.trim === "" ||
      sintomas.trim === ""
    ) {
      setError(true);
      return;
    }
    // eliminar mensajes de error
    setError(false);
    // asignar el id
    cita.id = uuid();

    // se crea la cita
    agregarCitas(cita);
    // se reinicia el formulario
    setCita({
      mascota: "",
      acompanante: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  const { mascota, acompanante, fecha, hora, sintomas } = cita;
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error"> Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={onSubmitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          placeholder="Nombre mascota"
          name="mascota"
          className="u-full-width"
          onChange={handleChange}
          value={mascota}
        />
        <label>Nombre del acompañante</label>
        <input
          type="text"
          placeholder="Nombre acompañante"
          name="acompanante"
          className="u-full-width"
          onChange={handleChange}
          value={acompanante}
        />
        <label>Fecha ingreso</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora ingreso</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Sintimas</label>
        <textarea
          placeholder="Sintomas mascota"
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};
Formulario.propTypes = {
  agregarCitas: PropTypes.func.isRequired,
};
export default Formulario;
