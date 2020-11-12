import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles/styles.css";

const HeaderView = ({ rol, user }) => {
  return (
    <div className="header">
      <figure>
        <Link to="/">
          <img src={require("../../assets/logo1.png")} alt="Logo" />
        </Link>
        <h1>Amascota</h1>
      </figure>
      <nav className="header-nav">
        <ul>
          <li className="header-tabs">
            <NavLink exact className="header-tab a-1" activeClassName="active" to="/">Inicio</NavLink>
          </li>
          <li className="header-tab">
            <NavLink className="header-tab" activeClassName="active" to="/caracteristicas">Caracteristicas</NavLink>
          </li>
          {user.correo && <li className="header-tab">
            <NavLink className="header-tab" activeClassName="active" to="/calendario">Calendario</NavLink>
          </li>}
          <li className="header-tab">
            <NavLink className="header-tab" activeClassName="active" to="/tips">Tips</NavLink>
          </li>
          {
            user.correo ? (
              <li className="header-tabs">
                <NavLink className="header-tab" activeClassName="active" to="/admin">Admin</NavLink>
              </li>
            )
              :
              <li className="header-tabs">
                <NavLink className="header-tab" activeClassName="active" to="/registrar">Ingresar</NavLink>
              </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default HeaderView;
