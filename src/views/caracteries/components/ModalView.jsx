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
            answers: []
        }
    }

    componentDidMount() {
        API.GET('/preguntas')
            .then(({ data }) => {
                let answers = data.data.map(q => ({}));
                this.setState({ questions: data.data, answers })
            });
    }

    reset() {
        this.setState({ answers: [] });
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

    send() {
        let { answers } = this.state
        let send = {
            id_propietario: this.props.user.id,
            respuestas: answers
        }
        console.log(send);
        API.POST('/mascota_ideal',send)
            .then(({ data }) => {
                if (data.ok) {
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
                this.reset();
            });
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
                    <div className="modalButtons">
                        <button className="btn btn-danger" type="button" onClick={() => this.reset()}>Cancelar</button>
                        <button className="btn btn-success" type="button" onClick={() => this.send()}>Envíar</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, {})(ModalView);