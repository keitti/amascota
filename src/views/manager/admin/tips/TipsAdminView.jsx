import { TimerOff } from '@material-ui/icons';
import React from 'react';
import "./styles.css";

const TipsAdminView = ({ tips = [], onChange, save, deleteTip, toggleType, isRegister, tip }) => (
  <div>
    <h2 className="text-center">Tips</h2>
    <div className="row tips-admin-container ">
      <div className="form-tips col-md-4">
        <h4>{isRegister ? 'Registrar nuevo' : 'editar'}  tip</h4>
        <form>
          <div className="form-group">
            <label >Nombre</label>
            <input type="text" className="form-control" name="nombre" placeholder="Nombre" onChange={({ target }) => onChange(target)}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea className="form-control" name="descripcion" placeholder="Descripción" cols="30" rows="5"
              onChange={({ target }) => onChange(target)}
            ></textarea>
          </div>
          <button type="button" className="btn btn-success"
            onClick={() => save()}
          >{isRegister ? 'Registrar' : 'Editar'}</button>
        </form>
        {!isRegister &&
          <button className="btn btn-danger" onClick={() => toggleType(true)}>Cancelar</button>}
      </div>
      <div className="list-tips col-md-8">
        <h4>Listado</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              tips.map((tip, i) =>
                < tr key={tip.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{tip.nombre}</td>
                  <td>{tip.descripcion}</td>
                  <td style={{ width: '160px' }}>
                    <button className="btn btn-danger" onClick={() => deleteTip(tip.id)}>Borrar</button>
                    <button className="btn btn-primary" onClick={() => toggleType(false, tip)}>Editar</button>
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>

  </div >
);

export default TipsAdminView;