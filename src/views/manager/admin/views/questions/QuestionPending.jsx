import React, { Component } from 'react';
import Swal from "sweetalert2";
import { connect } from "react-redux";

import { API } from '../../../../api';
import "./styles/styles.css";
// import ModalTest from './components/ModalTest';

class QuestionPending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            answer: [],
            showModal: false,
            estado: 2,
        };
    }

    componentDidMount() {
        this.getAnswer();
    }

    getAnswer() {
        API.GET(`/mascota_ideal/1`)
            .then(({ data }) => {
                if (data.ok) {
                    this.setState({ answers: data.data })
                }
            })
    }

    // upDateQuestion() {
    //     let { newQuestion, idUpdate } = this.state;
    //     this.setState({ idUpdate: -1, newQuestion: "" });
    //     API.PUT(`/question/${idUpdate}`, { question: newQuestion })
    //         .then(({ data }) => {
    //             if (data.ok) {
    //                 this.getQuestions();
    //             }
    //         });
    // }

    // upDateState(id, idPlayer, stateTest) {
    //     Swal.fire({
    //         title: '¿Estás seguro?',
    //         text: "¡No podrás revertir esto!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#36755B',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: `Sí, ${stateTest == -1 ? "rechazar" : stateTest == 3 ? "hacer observación" : "aprobar"}`,
    //         cancelButtonText: "Cancelar"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             API.PUT(`/answer/${id}`, { estado: stateTest, id_staff: this.props.user.id, observaciones: this.state.answer })
    //                 .then(({ data }) => {
    //                     if (data.ok) {
    //                         API.PUT(`/user/${idPlayer}`, { acceso_beta: stateTest });
    //                         this.getAnswer();
    //                     }
    //                 });
    //         }
    //     })
    //     this.setState({ showModal: false });
    // }

    render() {
        let { answers, answer, showModal } = this.state;
        return (
            <main className="test-container">
                {/* <ModalTest
                    show={showModal}
                    answer={answer}
                    estado={estado}
                    player={player}
                    onHide={() => this.setState({ showModal: false })}
                    upDateState={(id, idPlayer, estado) => this.upDateState(id, idPlayer, estado)}
                    onChange={({ value, name }, i) => {
                        let { answer } = this.state;
                        answer[i].observacion = value;
                        this.setState({ answer });
                    }}
                /> */}
                <h1>Test realizados.</h1>
                <div className="table-container">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Usurio</th>
                                <th scope="col">Correo</th>
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
                                            {a.id_propietario}
                                        </td>
                                        <td>
                                            {a.id_propietario}
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