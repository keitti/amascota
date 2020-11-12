import React, { Component } from 'react';
import "../styles/styles.css";

class ModalView extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="modalContainer ">
                <form action="" className="modalForm scrollBar">
                    <h1>Conoce a tu mascota ideal.</h1>
                    <div>
                        <label htmlFor="">¿Que tamaño de perro te gusta?.</label>
                        <select name="" className="form-control" id="" >
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Me da igual</option>
                            <option value="pequeño">Pequeño</option>
                            <option value="pequeño">Mediano</option>
                            <option value="pequeño">Grande</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿Vives en?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Casa</option>
                            <option value="-1">Apartamento</option>
                            <option value="-1">Finca</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿Quieres que tu perro sea?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Tranquilo y relajado</option>
                            <option value="-1">Dinamico y deportista</option>
                            <option value="-1">Tranquilo en casa y activo en calle</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿Tu perro estara solo?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Muy poco, paso mucho tiempo en casa</option>
                            <option value="-1">No más de medio día</option>
                            <option value="-1">8 horas o más</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿El perro vivira con niños?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">No, estara en contacto con niños</option>
                            <option value="-1">sí, de vez en cuando</option>
                            <option value="-1">Sí, tengo niños</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿Tines más amimales?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Sí, un perro</option>
                            <option value="-1">Sí. un gato</option>
                            <option value="-1">Sí, un perro y un gato</option>
                            <option value="-1">Sí, otro animal</option>
                            <option value="-1">No</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿Tienes experiencía educando perros?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Tengo experiencía, he tenido otros perros</option>
                            <option value="-1">No tengo mucha experiencía</option>
                            <option value="-1">Es mi primer perro</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿Te gustaría que tu perro fuera?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Guardían</option>
                            <option value="-1">Que sea sociable</option>
                            <option value="-1">Cariñoso con todo el mundo</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿Si el perro pierde pelo?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Me da igual</option>
                            <option value="-1">Me molesta un poco</option>
                            <option value="-1">Me molesta bastante</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">¿Tu edad?</label>
                        <select name="" className="form-control" id="">
                            <option value="-1">Seleccionar</option>
                            <option value="-1">Tengo menos de 30 años</option>
                            <option value="-1">Tengo entre 30 y 60 años</option>
                            <option value="-1">Tengo más de 60 años</option>
                        </select>
                    </div>

                    <div className="modalButtons">
                        <button className="btn btn-danger" type="button" onClick={() => this.props.toggleModal()}>Cancelar</button>
                        <button className="btn btn-success" type="button">Envíar</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default ModalView;