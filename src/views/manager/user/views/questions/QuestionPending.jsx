import React, { Component } from 'react';
import Swal from "sweetalert2";
import { connect } from "react-redux";

import { API } from '../../../../../api';
import "./styles.css";
import moment from "moment";
import ModalAnswer from './components/ModalAnswer';

class QuestionPending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            answer: {
                respuestas: []
            },
            showModal: false,
            isEdit: true
        };
    }

    reset() {
        this.setState({
            answer: {
                respuestas: []
            },
            showModal: false,
            isEdit: true
        })
        this.getAnswer();
    }

    componentDidMount() {
        this.getAnswer();
    }

    getAnswer() {
        API.GET(`/mascota_ideal/?id=${this.props.user.id}`)
            .then(({ data }) => {
                if (data.ok) {
                    this.setState({ answers: data.data })
                }
            })
    }

    upDateAnswer() {
        let { answer } = this.state;
        API.PUT(`/mascota_ideal/${answer.id}`, answer)
            .then(({ data }) => {
                if (data.ok) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Se respondio con exito!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Error al responder.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                this.reset();
            });
    }

    render() {
        let { answers, answer, showModal, isEdit } = this.state;
        return (
            <main className="question-container manager">
                <ModalAnswer
                    show={showModal}
                    isEdit={isEdit}
                    answer={answer}
                    upDateAnswer={() => this.upDateAnswer()}
                    setState={(values) => this.setState(values)}
                    onChange={({ value, name }) => this.setState({ answer: { ...this.state.answer, [name]: value } })}
                />
                <h1>Test realizados.</h1>
                <div className="table-container">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Fecha relizada</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Ver</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                answers.map((a, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td>
                                            {moment(a.fecha_registro).format("YYYY-MM-DD")}
                                        </td>
                                        <td>
                                            {
                                                a.estado == 1 ? (
                                                    <button className="btn btn-primary btn-sm" style={{ opacity: 100 }} disabled>Pendiente</button>
                                                ) : (
                                                        <button className="btn btn-success btn-sm" style={{ opacity: 100 }} disabled>Repondido</button>
                                                    )
                                            }
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-outline-light" onClick={() => this.setState({ showModal: true, answer: a })}><i class="fas fa-eye"></i></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

const mapStateTopProps = (reducers) => {
    return reducers.usersReducer;
};

export default connect(mapStateTopProps, {})(QuestionPending);