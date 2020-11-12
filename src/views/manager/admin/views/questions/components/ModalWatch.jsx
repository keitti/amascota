import React from 'react'
import { Modal, Button } from "react-bootstrap";

const ModalWatch = ({
    show,
    isEdit,
    question,
    upDateQuestion,
    deleteQuestion,
    setState,
    addAnswerEdit,
    delAnswerEdit,
    onChange,
    onChangeAnswer
}) => {
    return (
        <Modal
            show={show}
            onHide={() => setState({ showModal: false, isEdit: true })}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Detalle de pregunta
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div >
                    <label className="" htmlFor="">Pregunta</label>
                    <input className="form-control" disabled={isEdit} name="titulo" placeholder="Título" value={question.nombre} onChange={({ target }) => onChange(target)} />
                    {
                        question.respuestas.map((q, i) => (
                            <>
                                <label className="" htmlFor="">{i + 1} respuesta</label>
                                <textarea className="form-control" disabled={isEdit} name="descripcion" placeholder={`Respuesta ${i}`} value={q.nombre} onChange={({ target }) => onChangeAnswer(target, i)} />
                                <br />
                                {
                                    question.length > 1 && (
                                        <div className="newsRule-icon">
                                            <Button className="btn btn-danger" onClick={() => delAnswerEdit(i)}><i class="fas fa-trash-alt"></i></Button>
                                        </div>
                                    )
                                }
                            </>
                        ))
                    }
                </div>
                <div className="newsRule-icon">
                    <Button className="btn btn-success" onClick={() => addAnswerEdit()}><i class="fas fa-plus-circle"></i></Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-dark" onClick={() => setState({ showModal: false, isEdit: true })}>Cerrar</Button>
                <Button className="btn btn-danger" onClick={() => !isEdit ? setState({ isEdit: true }) : deleteQuestion()}>{!isEdit ? "Cancelar" : "Eliminar"}</Button>
                <Button className={`btn btn-${isEdit ? "primary" : "success"}`} onClick={() => !isEdit ? upDateQuestion() : setState({ isEdit: false })}>{!isEdit ? "Guardar" : "Modificar"}</Button>
            </Modal.Footer >
        </Modal >
    );
}

export default ModalWatch;