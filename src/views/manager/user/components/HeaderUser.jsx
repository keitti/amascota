import React from 'react';
import "../../styles/styles.css";
import ProfileContainer from '../views/profile/ProfileContainer';
// import QuestionCreate from '../views/questions/QuestionCreate';
// import TipsAdminContainer from '../views/tips/TipsAdminContainer';
import QuestionPending from '../views/questions/QuestionPending';


const HeaderUser = ({ logOut }) => (
    <>
        <nav className="manager-header container">
            <ul className="nav nav-pills manager-tab" id="pills-tab" role="tablist">
                {/* <li className="nav-item dropdown align-self-center" role="presentation">
                    <a className="nav-link active dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tu mascota ideal</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item active" id="pills-questionList-tab" data-toggle="pill" href="#pills-questionList" role="tab" aria-controls="pills-questionList" aria-selected="true">Solicitudes</a>
                        <a className="dropdown-item" id="pills-questionCreate-tab" data-toggle="pill" href="#pills-questionCreate" role="tab" aria-controls="pills-questionCreate" aria-selected="false">Administrar preguntas</a>
                    </div>
                </li> */}
                {/* <li className="nav-item align-self-center" role="presentation">
                    <a className="nav-link" id="pills-tips-tab" data-toggle="pill" href="#pills-tips" role="tab" aria-controls="pills-tips" aria-selected="false">Tips</a>
                </li> */}
                {/* <li className="nav-item align-self-center" role="presentation">
                    <a className="nav-link" id="pills-cita-tab" data-toggle="pill" href="#pills-cita" role="tab" aria-controls="pills-cita" aria-selected="false">Citas</a>
                </li> */}
                <li className="nav-item align-self-center" role="presentation">
                    <a className="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="true">Perfil</a>
                </li>
                <li className="nav-item align-self-center" role="presentation">
                    <a className="nav-link" id="pills-miMascota-tab" data-toggle="pill" href="#pills-miMascota" role="tab" aria-controls="pills-miMascota" aria-selected="false">Mi mascota idel</a>
                </li>
                <li className="nav-item align-self-center" role="presentation">
                    <button className="btn btn-danger" type="button" onClick={() => logOut()}>
                        Cerrar sesión
                </button>
                </li>
            </ul>
        </nav>
        <div className="tab-content" id="pills-tabContent">

            <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><ProfileContainer /></div>
            <div className="tab-pane fade" id="pills-miMascota" role="tabpanel" aria-labelledby="pills-miMascota-tab"><QuestionPending /></div>
            {/* <div className="tab-pane fade" id="pills-questionCreate" role="tabpanel" aria-labelledby="pills-questionCreate-tab">< QuestionCreate /></div> */}
            {/* <div className="tab-pane fade" id="pills-tips" role="tabpanel" aria-labelledby="pills-tips-tab"><TipsAdminContainer /></div>
            <div className="tab-pane fade" id="pills-cita" role="tabpanel" aria-labelledby="pills-cita-tab"><CitasContainer /></div> */}
        </div>
    </>
)

export default HeaderUser;