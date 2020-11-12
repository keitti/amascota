import React from "react";
import "../styles/styles.css";

const Login = ({ view, toggle, onChange, login }) => (
  <form>
    <div class="form-group">
      <label for="">Correo eléctronico</label>
      <input type="email" class="form-control" name="correo" placeholder="Correo" onChange={({ target }) => onChange(target)} />
    </div>
    <div class="form-group">
      <label>Contraseña</label>
      <input type="password" class="form-control" name="contraseña" placeholder="Contraseña" onChange={({ target }) => onChange(target)} />
    </div>
    <button type="button" class="btn btn-light" onClick={() => login()}>Ingresar</button>
  </form>
);

export default Login;
