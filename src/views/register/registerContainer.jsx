import React, { Component } from "react";
import { API } from "../../api";
import RegisterView from "./registerView";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { User } from "../../reducers/actions/users";
import { Redirect } from "react-router";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: true,
      propietario: {
        nombre: "",
        correo: "",
        contraseña: "",
      },
      mascota: {
        nombre: "",
        edad: "",
        ultima_fecha_vacunacion: "",
        color: "",
        pelaje: "",
        descripcion: "",
      }
    }
  };

  setPropietario(tag, value) {
    let { propietario } = this.state;
    propietario[tag] = value;
    this.setState({ propietario })
  }
  setMascota(tag, value) {
    let { mascota } = this.state;
    mascota[tag] = value;
    this.setState({ mascota })
  }

  toggle() {
    this.setState({ view: !this.state.view })
  }

  onChange({ name, value }) {
    let { propietario } = this.state;
    this.setState({
      propietario: {
        ...propietario,
        [name]: value
      }
    })
  }

  login() {
    let { correo, contraseña } = this.state.propietario;
    API.POST("/usuario/login", {
      correo,
      contraseña
    })
      .then(({ data }) => {
        if (data.ok) {
          localStorage.setItem("correo", data.data.correo);
          this.props.setUser(data.data);
        } else {
          Swal.fire({
            position: 'center',
            icon: 'danger',
            title: "Datos incorrectos.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  }

  registrar() {
    let { propietario, mascota } = this.state;
    let data = {
      propietario,
      mascota
    }

    API.POST("/usuario", data)
      .then(({ data }) => {
        console.log(data)
        if (data.ok) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Registro exito!",
            showConfirmButton: false,
            timer: 1500
          });
          API.POST("/usuario/login", {
            correo: propietario.correo,
            contraseña: propietario.contraseña
          })
            .then(({ data }) => {
              if (data.ok) {
                localStorage.setItem("correo", data.data.correo);
                this.props.setUser(data.data);
              }
            });
        } else {
          alert("Error al registrarse")
        }
      })
      .catch(e => alert("Error al registrarse"))
  }

  render() {
    if (this.props.user.correo) {
      return <Redirect to="/" />
    }
    return (
      <RegisterView
        onChange={(value) => this.onChange(value)}
        view={this.state.view}
        toggle={() => this.toggle()}
        setPropietario={(tag, value) => this.setPropietario(tag, value)}
        setMascota={(tag, value) => this.setMascota(tag, value)}
        registrar={() => this.registrar()}
        login={() => this.login()}
      />
    );
  }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

const mapDispatchToProps = (Dispatch) => {
  return {
    setUser: (user) => Dispatch(User(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
