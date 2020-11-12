import React, { Component } from 'react';
import Swal from "sweetalert2";

import { API } from '../../../../api';
import "./styles/styles.css";
import ModalNew from './components/ModalNew';
import ModalWatch from './components/ModalWatch';

class QuestionCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newModal: false,
            isEdit: true,
            questions: [],
            question: [],
            newQuestion: {
                nombre: "",
                respuestas: [""]
            }
        };
    }

    componentDidMount() {
        this.getQuestions();
    }

    getQuestions() {
        API.GET(`/preguntas`)
            .then(({ data }) => {
                if (data.ok) {
                    this.setState({ questions: data.data })
                }
            })
    }

    addAnswerNew() {
        let { newQuestion } = this.state;
        newQuestion.respuestas.push("");
        this.setState({ newQuestion })
    }
    addAnswerEdit() {
        let { question } = this.state;
        question.respuestas.push("");
        this.setState({ question })
    }

    delAnswerNew(i) {
        let { newQuestion } = this.state;
        newQuestion.slice(i, 1);
        this.setState({ newQuestion })
    }
    delAnswerEdit(i) {
        let { question } = this.state;
        question.slice(i, 1);
        this.setState({ question })
    }

    create() {
        let { newQuestion } = this.state;
        this.setState({ activiteNew: false });
        API.POST(`/preguntas`, newQuestion)
            .then(({ data }) => {
                if (data.ok) {
                    this.getQuestions();
                }
            });
    }

    upDateQuestion() {
        let { question } = this.state;
        API.PUT(`/preguntas/${question.id}`, question)
            .then(({ data }) => {
                if (data.ok) {
                    this.getQuestions();
                }
            });
    }

    deleteQuestion() {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#36755B',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                API.DEL(`/preguntas/${this.state.question.id}`)
                    .then(({ data }) => {
                        if (data.ok) {
                            this.getQuestions();
                        }
                    });
            }
        })

    }

    render() {
        let { questions, newQuestion, question, showModal, newModal, isEdit } = this.state;
        return (
            <>
                <main className="test-container">
                    <button type="button" className="btn btn-success" onClick={() => this.setState({ newModal: true })}>Nueva pregunta <i className="fas fa-plus"></i></button>
                    <div className="table-container">
                        <table className="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">pregunta</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    questions.map((q, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{q.pregunta}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-light"
                                                    onClick={() => this.setState({ showModal: true, question: q })}
                                                ><i class="fas fa-eye"></i></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </main>
                <ModalWatch
                    show={showModal}
                    isEdit={isEdit}
                    question={question}
                    upDateQuestion={() => this.upDateQuestion()}
                    deleteQuestion={() => this.deleteQuestion()}
                    setState={(values) => this.setState(values)}
                    addAnswerEdit={() => this.addAnswerEdit()}
                    delAnswerEdit={(i) => this.delAnswerEdit(i)}
                    onChange={({ value, name }) => this.setState({ question: { ...this.state.question, [name]: value } })}
                    onChangeAnswer={({ value }, i) => {
                        let { question } = this.state;
                        question.respuestas[i] = value;
                        this.setState({ question });
                    }}
                />
                <ModalNew
                    show={newModal}
                    newQuestion={newQuestion}
                    setState={(values) => this.setState(values)}
                    addAnswerNew={() => this.addAnswerNew()}
                    delAnswerNew={(i) => this.delAnswerNew(i)}
                    create={() => this.create()}
                    onChange={({ value, name }) => this.setState({ newQuestion: { ...this.state.newQuestion, [name]: value } })}
                    onChangeAnswer={({ value }, i) => {
                        let { newQuestion } = this.state;
                        newQuestion.respuestas[i] = value;
                        this.setState({ newQuestion });
                    }}
                />
            </>
        );
    }
}

export default QuestionCreate;