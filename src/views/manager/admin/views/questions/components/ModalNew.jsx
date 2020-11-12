import React from 'react'
import { Modal, Button } from "react-bootstrap";
import "../styles.scss";

const ModalNew = ({
    show,
    newQuestion,
    setState,
    addAnswerNew,
    delAnswerNew,
    create,
    onChange,
    onChangeAnswer
}) => {
    return (
        <Modal
            show={show}
            onHide={() => setState({showModal:false})}
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
                    <label className="" htmlFor="">Pregunta</label>
                    <input className="form-control" disabled={isEdit} name="titulo" placeholder="Título" value={newQuestion.nombre} onChange={({ target }) => onChange(target)} />
                    {
                        newQuestion.respuestas.map((q, i) => (
                            <>
                                <label className="" htmlFor="">{i + 1} respuesta</label>
                                <textarea className="form-control" disabled={isEdit} name="descripcion" placeholder={`Respuesta ${i}`} value={q.nombre} onChange={({ target }) => onChangeAnswer(target, i)} />
                                <br />
                                {
                                    newQuestion.length > 1 && (
                                        <div className="newsRule-icon">
                                            <Button className="btn btn-danger" onClick={() => delAnswerNew(i)}><i class="fas fa-trash-alt"></i></Button>
                                        </div>
                                    )
                                }
                            </>
                        ))
                    }
                </div>
                <div className="newsRule-icon">
                    <Button className="btn btn-success" onClick={() => addAnswerNew()}><i class="fas fa-plus-circle"></i></Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-dark" onClick={() => setState({showModal:false})}>Cerrar</Button>
                <Button className="btn btn-success" onClick={() => create()}>Registrar</Button>
            </Modal.Footer >
        </Modal >
    );
}

export default ModalNew;