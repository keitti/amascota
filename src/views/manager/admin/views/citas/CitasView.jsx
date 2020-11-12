import { TimerOff } from '@material-ui/icons';
import React from 'react';
import "./styles.css";
// import "../../styles/styles.css";
import moment from "moment";

const CitasView = ({ clear, citas = [], onChange, save, deleteTip, toggleType, isRegister, cita, reset, setState, img }) => (
  <div>
    {/* <h2 className="text-center">cita</h2> */}
    <div className="col cita-admin-container">
      <div className="">
        <h4>{isRegister ? 'Registrar nueva' : 'Editar'}  cita</h4>
        <form className="form-cita">
          <div className="col-md-4 form-group">
            <div className="form-group">
              <label >Nombre</label>
              <input type="text" className="form-control" name="nombre" placeholder="Nombre" onChange={({ target }) => onChange(target)} value={cita.nombre} />
            </div>
            <div className="form-group">
              <label for="exampleFormControlFile1">Fecha</label>
              <input type="date" class="form-control" name="fecha" value={cita.fecha ? moment(cita.fecha).format("YYYY-MM-DD") : ""} onChange={({ target }) => onChange(target)} />
            </div>
          </div>
          <div className="col-md-5 form-group">
            <label>Descripción</label>
            <textarea className="form-control" name="descripcion" placeholder="Descripción" cols="30" rows="5"
              onChange={({ target }) => onChange(target)}
              value={cita.descripcion}
            ></textarea>
          </div>
          <div className="col-md-3 form-group btns">
            {(!isRegister || clear) && <button className="btn btn-danger" onClick={() => reset()}>Cancelar</button>}
            <button type="reset" className="btn btn-success"
              onClick={() => save()}
            >{isRegister ? 'Registrar' : 'Editar'}</button>
          </div>
        </form>
      </div>
      <div className="list-cita col-md-12 row-md-20 scrollBar">
        <h4>Listado</h4>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Título</th>
              <th scope="col">Fecha</th>
              <th scope="col">Descripción</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              citas.map((c, i) =>
                < tr key={c.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{c.nombre}</td>
                  <td>{moment(c.fecha).format("YYYY-MM-DD")}</td>
                  <td>{c.descripcion}</td>
                  <td style={{ width: '160px' }}>
                    <button className="btn btn-primary" onClick={() => toggleType(false, c)}><i class="fas fa-pencil-alt"></i></button>
                    <button className="btn btn-danger" onClick={() => deleteTip(c.id)}><i class="fas fa-trash-alt"></i></button>
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>

  </div >
);

export default CitasView;