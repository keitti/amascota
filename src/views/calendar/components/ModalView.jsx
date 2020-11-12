import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from "sweetalert2";
import { API } from '../../../api';
import "../styles/styles.css";
import moment from "moment";
import 'moment/locale/es';
moment.locale('es');

class ModalView extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        let { cita, setState } = this.props;
        return (
            <div className="modalContainer ">
                <div className="modalForm scrollBar">

                    <h2>{cita.nombre}</h2>
                    <span>{moment(cita.fecha).format("LL")}</span>
                    <hr />
                    <p>{cita.descripcion}</p>
                    <div className="modalButtons">
                        <button className="btn btn-primary" type="button" onClick={() => setState({ modal: false })}>Cerrar</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, {})(ModalView);