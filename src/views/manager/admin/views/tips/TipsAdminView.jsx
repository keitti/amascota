import { TimerOff } from '@material-ui/icons';
import React from 'react';
import "./styles.css";
// import "../../styles/styles.css";
import { CardMedia } from '@material-ui/core';
import { URL_API } from '../../../../../api';

const TipsAdminView = ({ clear, tips = [], onChange, save, deleteTip, toggleType, isRegister, tip, reset, setState, img }) => (
  <div>
    {/* <h2 className="text-center">Tips</h2> */}
    <div className="row tips-admin-container manager">
      <div className="form-tips col-md-4">
        <h4>{isRegister ? 'Registrar nuevo' : 'Editar'}  tip</h4>
        <form className="">
          <div className="form-group">
            <label >Nombre</label>
            <input type="text" className="form-control" name="nombre" placeholder="Nombre" onChange={({ target }) => onChange(target)} value={tip.nombre} />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea className="form-control" name="descripcion" placeholder="Descripción" cols="30" rows="5"
              onChange={({ target }) => onChange(target)}
              value={tip.descripcion}
            ></textarea>
          </div>
          <div className="form-group">
            <label for="exampleFormControlFile1">Imagen</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={({ target }) => {
              if (target.files.length) {
                let reader = new FileReader();
                reader.readAsDataURL(target.files[0]);
                reader.onload = function () {
                  setState({ img: reader.result, file: target });
                }
              } else {
                setState({ img: null, file: null });
              }
            }} />
          </div>
          <div className="">
            {(!isRegister || clear) && <button className="btn btn-danger" onClick={() => reset()}>Cancelar</button>}
            <button type="reset" className="btn btn-success"
              onClick={() => save()}
            >{isRegister ? 'Registrar' : 'Editar'}</button>
          </div>
          <br />
          <div className="row justify-content-center">
            {(img || tip.imagen) && (<img src={img || `${URL_API}/file/${tip.imagen}`} height="140" width="300" />)}
          </div>
        </form>
      </div>
      <div className="list-tips col-md-8 row-md-20 scrollBar">
        <h4>Listado</h4>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Título</th>
              <th scope="col">Descripción</th>
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
                    <button className="btn btn-primary" onClick={() => toggleType(false, tip)}><i class="fas fa-pencil-alt"></i></button>
                    <button className="btn btn-danger" onClick={() => deleteTip(tip.id)}><i class="fas fa-trash-alt"></i></button>
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