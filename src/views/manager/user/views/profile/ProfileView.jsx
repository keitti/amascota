import React from 'react';
import moment from "moment";
import "moment/locale/es";
moment.locale("es");
// import "./styles.css";

const ProfielView = (({ user }) => (
    <main className="question-container manager">

        <h1>Perfil</h1>
        <div>
            <h2>Propietario</h2>
            <div className="row">
                <div className="col-md-6">
                    <label>Nombre</label>
                    <input className="form-control" value={user.nombre} />
                </div>
                <div className="col-md-6">
                    <label>Correo</label>
                    <input className="form-control" value={user.correo} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Miembro desde el</label>
                    <input disabled className="form-control" value={ moment(user.fecha_registro).format("LL")} />
                </div>
            </div>
            <h2>Mascota</h2>
            <div className="row">
                <div className="col-md-6">
                    <label>Nombre</label>
                    <input disabled className="form-control" value={user.mascota} />
                </div>
                <div className="col-md-6">
                    <label>Edad</label>
                    <input disabled className="form-control" value={user.edad} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Pelaje</label>
                    <input disabled className="form-control" value={user.pelaje} />
                </div>
                <div className="col-md-6">
                    <label>Color</label>
                    <input disabled className="form-control" value={user.color} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label>Última fecha de vacunación</label>
                    <input disabled className="form-control" value={moment(user.ultima_fecha_vacunacion).format("LL")} />
                </div>
                <div className="col-md-6">
                    <label>Sobre tu mascota</label>
                    <textarea disabled className="form-control" value={user.descripcion} />
                </div>
            </div>
        </div>
    </main>
))


export default ProfielView;