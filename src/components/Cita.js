import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className="cita">
      <p>
        {" "}
        Mascota : <span>{cita.mascota}</span>{" "}
      </p>
      <p>
        {" "}
        Acompañante : <span>{cita.acompanante}</span>{" "}
      </p>
      <p>
        {" "}
        Fecha ingreso : <span>{cita.fecha}</span>{" "}
      </p>
      <p>
        {" "}
        Hora ingreso : <span>{cita.hora}</span>{" "}
      </p>
      <p>
        {" "}
        Sintomas : <span>{cita.sintomas}</span>{" "}
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};
Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};
export default Cita;
