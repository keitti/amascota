import React from 'react'
import { Modal, Button } from "react-bootstrap";

const ModalAnswer = ({
    show,
    isEdit,
    answer,
    upDateAnswer,
    setState,
    onChange
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
                    {isEdit ? `Respuestas de ${answer.propietario}` : "Modificando respuesta"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div >
                    {
                        answer.respuestas.map((a, i) => (
                            <div className="border border-dark m-2 p-3">
                                <label className="" htmlFor="">{a.pregunta}</label>
                                <textarea className="form-control" disabled={true} name="descripcion" placeholder={`Respuesta`} value={a.respuesta} />
                            </div>
                        ))
                    }
                </div>
                <br />
                <textarea className="form-control" disabled={isEdit && !answer.estado} name="nombre" placeholder={`Respuesta`} value={answer.nombre} onChange={({ target }) => onChange(target)} />
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-dark" onClick={() => setState({ showModal: false, isEdit: true })}>Cerrar</Button>
                {(answer.estado==0) && (<Button className={`btn btn-${isEdit ? "primary" : "success"}`} onClick={() => !isEdit ? upDateAnswer() : setState({ isEdit: false })}>{!isEdit ? "Guardar" : "Modificar"}</Button>)}
                {(answer.estado==1) && (<Button className="btn btn-success" onClick={() => upDateAnswer()}>Responder</Button>)}
            </Modal.Footer>
        </Modal >
    );
}

export default ModalAnswer;