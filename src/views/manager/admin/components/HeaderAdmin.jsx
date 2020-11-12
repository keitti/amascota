import React from 'react';
import "../../styles/styles.css";
import TipsAdminContainer from '../tips/TipsAdminContainer';

const HeaderAdmin = ({ logOut }) => (
    <>
        <nav className="manager-header">
            <ul className="nav nav-pills mb-3 manager-tab" id="pills-tab" role="tablist">
                <li className="nav-item dropdown" role="presentation">
                    <a className="nav-link active dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tu mascota ideal</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item active" id="pills-questionList-tab" data-toggle="pill" href="#pills-questionList" role="tab" aria-controls="pills-questionList" aria-selected="true">Solicitudes</a>
                        <a className="dropdown-item" id="pills-questionCreate-tab" data-toggle="pill" href="#pills-questionCreate" role="tab" aria-controls="pills-questionCreate" aria-selected="false">Administrar preguntas</a>
                    </div>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-rules-tab" data-toggle="pill" href="#pills-rules" role="tab" aria-controls="pills-rules" aria-selected="false">Tips</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-news-tab" data-toggle="pill" href="#pills-news" role="tab" aria-controls="pills-news" aria-selected="false">Noticias</a>
                </li>
                <button className="btn btn-danger btn-M align-self-end" type="button" onClick={() => logOut()}>
                    Cerrar sesión
                </button>
            </ul>
        </nav>
        <div className="tab-content" id="pills-tabContent">
            {
            /* <div className="tab-pane fade show active" id="pills-testList" role="tabpanel" aria-labelledby="pills-testList-tab"><TestPendingContainer /></div>
            <div className="tab-pane fade" id="pills-testCreate" role="tabpanel" aria-labelledby="pills-testCreate-tab"><TestCreateContainer /></div>*/}
            <div className="tab-pane fade" id="pills-rules" role="tabpanel" aria-labelledby="pills-rules-tab"><TipsAdminContainer /></div>
            {/* <div className="tab-pane fade" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab"><NewsContainer /></div> */}
        </div>
    </>
)

export default HeaderAdmin;