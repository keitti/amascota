import React from 'react';
import "../../styles/styles.css";

const HeaderUser = ({ }) => (
    <>
        <nav className="manager-header">
            <ul className="nav nav-pills mb-3 manager-tab" id="pills-tab" role="tablist">
                <li className="nav-item dropdown" role="presentation">
                    <a className="nav-link active dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Test</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item active" id="pills-testList-tab" data-toggle="pill" href="#pills-testList" role="tab" aria-controls="pills-testList" aria-selected="true">Test pendientes</a>
                        <a className="dropdown-item" id="pills-testCreate-tab" data-toggle="pill" href="#pills-testCreate" role="tab" aria-controls="pills-testCreate" aria-selected="false">Administrar test</a>
                    </div>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-rules-tab" data-toggle="pill" href="#pills-rules" role="tab" aria-controls="pills-rules" aria-selected="false">Reglas</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-news-tab" data-toggle="pill" href="#pills-news" role="tab" aria-controls="pills-news" aria-selected="false">Noticias</a>
                </li>
            </ul>
        </nav>
        <div className="tab-content" id="pills-tabContent">
            {/* <div className="tab-pane fade show active" id="pills-testList" role="tabpanel" aria-labelledby="pills-testList-tab"><TestPendingContainer /></div>
            <div className="tab-pane fade" id="pills-testCreate" role="tabpanel" aria-labelledby="pills-testCreate-tab"><TestCreateContainer /></div>
            <div className="tab-pane fade" id="pills-rules" role="tabpanel" aria-labelledby="pills-rules-tab"><RulesContainer /></div>
            <div className="tab-pane fade" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab"><NewsContainer /></div> */}
        </div>
    </>
)

export default HeaderUser;