import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import "./styles/styles.css";

const RegisterView = ({ view, toggle, setPropietario, setMascota, registrar, onChange, login }) => (
  <div className="register-container scrollBar">
    <div className="register-form">
      <h2>{view ? "Ingresa" : "Dejanos conocerte"}</h2>
      {
        view ?
          <Login
            onChange={(value) => onChange(value)}
            login={() => login()}
          />
          :
          <Register
            setPropietario={(tag, value) => setPropietario(tag, value)}
            setMascota={(tag, value) => setMascota(tag, value)}
            registrar={() => registrar()}
          />
      }
      <button className="btn btn-light btn-b" onClick={() => toggle()}>{view ? "¿No tienes cuenta? Crear una." : "¡Ya tengo cuenta! Ingresar"}</button>
    </div>
  </div>
);

export default RegisterView;
