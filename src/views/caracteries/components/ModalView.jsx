import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from "sweetalert2";
import { API } from '../../../api';
import "../styles/styles.css";

class ModalView extends Component {
    constructor() {
        super()
        this.state = {
            questions: [],
            answers: [],
            loading: true,
            sending: false,
            respuesta_mascota: "",
            mascota:"default.jpg"
        }
    }

    async componentDidMount() {
        await API.GET('/preguntas')
            .then(({ data }) => {
                let answers = data.data.map(q => ({}));
                this.setState({ questions: data.data, answers })
            });
        this.setState({ loading: false })
    }

    reset() {
        this.setState({ answers: [], respuesta_mascota: "" });
        this.props.toggleModal();
    }

    onChange({ value }, pregunta, i) {
        let { answers } = this.state;
        answers[i] = {
            pregunta,
            respuesta: value
        }
        this.setState({ answers })
    }

    async send() {
        let { answers } = this.state
        let send = {
            id_propietario: this.props.user.id,
            respuestas: answers
        }
        
        let respuesta_mascota = "por definir";
        let mascota = "default.jpg";

        if (send.respuestas[0].respuesta == "perro") {
            if ((send.respuestas[1].respuesta == "poco tiempo") && (send.respuestas[2].respuesta == "Si") && (send.respuestas[3].respuesta == "apartamento")) {
                respuesta_mascota = "hola!! tu mascota ideal seria un criollo"
                mascota = "criollo.jpg";
            }
            else if ((send.respuestas[1].respuesta == "bastante tiempo") && (send.respuestas[2].respuesta == "No") && (send.respuestas[3].respuesta == "casa")) {
                respuesta_mascota = "hola!! tu mascota ideal seria un labrador"
                mascota = "labrador.jpg";
            }
            else if ((send.respuestas[1].respuesta == "medio tiempo") && (send.respuestas[2].respuesta == "Si") && (send.respuestas[3].respuesta == "finca")) {
                respuesta_mascota = "hola!! tu mascota ideal seria un pastor aleman"
                mascota = "pastor_aleman.jpg";
            }
            else {
                respuesta_mascota = "hola!! segun tus respuestas en este momento no contamos con una mascota ideal para ti"
            }
        }
        else {

            if ((send.respuestas[1].respuesta == "poco tiempo") && (send.respuestas[2].respuesta == "Si") && (send.respuestas[3].respuesta == "apartamento")) {
                respuesta_mascota = "hola!! tu mascota ideal seria un gato criollo"
                mascota = "gato_criollo.jpg";
            }
            else if ((send.respuestas[1].respuesta == "bastante tiempo") && (send.respuestas[2].respuesta == "No") && (send.respuestas[3].respuesta == "casa")) {
                respuesta_mascota = "hola!! tu mascota ideal seria  un Siamés"
                mascota = "Siames.jpg";
            }
            else if ((send.respuestas[1].respuesta == "medio tiempo") && (send.respuestas[2].respuesta == "Si") && (send.respuestas[3].respuesta == "finca")) {
                respuesta_mascota = "hola!! tu mascota ideal seria un gato manx"
                mascota = "manx.jpg";
            }
            else {
                respuesta_mascota = "hola!! segun tus respuestas en este momento no contamos con una mascota ideal para ti"
            }

        }

        send.nombre = respuesta_mascota;

        this.setState({sending:true,mascota})

        await  API.POST('/mascota_ideal', send)
            .then(({ data }) => {
                console.log("mk ", data)
                if (data.ok) {
                    this.setState({ respuesta_mascota })
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "¡Test envíado!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'danger',
                        title: "¡Error al envríar el test!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // this.reset();
            });
            this.setState({sending:false})
    }

    render() {
        let { questions } = this.state;
        return (
            <div className="modalContainer ">
                <form action="" className="modalForm scrollBar">
                    <h1>Conoce a tu mascota ideal.</h1>
                    {
                        questions.map((q, i) => (
                            <div key={i}>
                                <label htmlFor="">{q.nombre}</label>
                                <select name={q.nombre} className="form-control" id={i} onChange={({ target }) => this.onChange(target, q.nombre, i)} >
                                    <option value="no respondida">Seleccionar</option>
                                    {
                                        q.respuestas.map((r, j) => (
                                            <option key={j} value={r.nombre}>{r.nombre}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        ))
                    }
                    {
                        this.state.respuesta_mascota != "" && (
                            <>
                                <h3>Tu mascota ideal es.</h3>
                                <p>{this.state.respuesta_mascota}</p>
                                <img style={{marginBottom:"20px"}} src={require(`../../../assets/ideal/${this.state.mascota}`)} height={300} />
                            </>
                        )
                    }
                    {
                        !this.state.loading ? (
                            <div className="modalButtons">
                                <button className="btn btn-danger" type="button" onClick={() => this.reset()}>{this.state.respuesta_mascota == "" ? "Cancelar" : "Cerrar"}</button>
                                {
                                    (this.state.respuesta_mascota == "") && (
                                        this.state.sending ? "Enviando..." :
                                    <button className="btn btn-success" type="button" onClick={() => this.send()}>Envíar</button>
                                    )
                                }
                            </div>
                        )
                            : <p>Cargando...</p>
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, {})(ModalView);