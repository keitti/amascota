import React from 'react'
import { Modal, Button } from "react-bootstrap";
import "../styles.css";

const ModalNew = ({
    show,
    newQuestion,
    setState,
    addAnswerNew,
    delAnswerNew,
    create,
    onChange,
    onChangeAnswer,
    reset
}) => {
    return (
        <Modal
            show={show}
            onHide={() => reset()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Nueva pregunta.
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div >
                    <label className="question-middle" htmlFor="">Pregunta</label>
                    <input className="form-control" name="nombre" placeholder="Nombre" value={newQuestion.nombre} onChange={({ target }) => onChange(target)} />
                    <br/>
                    {
                        newQuestion.respuestas.map((q, i) => (
                            <div className="border border-dark m-2 p-3">
                                <label className="" htmlFor="">{i + 1} respuesta</label>
                                <textarea className="form-control" name="descripcion" placeholder={`Respuesta`} value={q} onChange={({ target }) => onChangeAnswer(target, i)} />
                                <br />
                                {
                                    newQuestion.respuestas.length > 1 && (
                                        <div className="newsRule-icon question-middle">
                                            <Button className="btn btn-danger" onClick={() => delAnswerNew(i)}><i class="fas fa-trash-alt"></i></Button>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
                <br />
                <div className="newsRule-icon question-middle">
                    <Button className="btn btn-success" onClick={() => addAnswerNew()}><i class="fas fa-plus-circle"></i></Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-dark" onClick={() => reset()}>Cerrar</Button>
                <Button className="btn btn-success" onClick={() => create()}>Registrar</Button>
            </Modal.Footer >
        </Modal >
    );
}

export default ModalNew;