import React from "react";
import "../styles/styles.css";

const Register = ({ view, toggle, setPropietario, setMascota,registrar }) => (
  <form>
    <h2>Propietario</h2>

    <div class="form-group">
      <label for="">Nombre completo *</label>
      <input name="nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" onChange={({target})=>setPropietario(target.name,target.value)}/>
    </div>
    <div class="form-group">
      <label for="">Correo *</label>
      <input  name="correo" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo" onChange={({target})=>setPropietario(target.name,target.value)}/>
    </div>
    <div class="form-group">
      <label>Contraseña *</label>
      <input  name="contraseña" type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña" onChange={({target})=>setPropietario(target.name,target.value)}/>
    </div>

    {/* <h2>Mascota</h2>
    <div class="form-group">
      <label for="">Nombre *</label>
      <input  name="nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" onChange={({target})=>setMascota(target.name,target.value)}/>
    </div>
    <div class="form-group">
      <label for="">Edad *</label>
      <input  name="edad" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Edad" onChange={({target})=>setMascota(target.name,target.value)}/>
    </div>
    <div class="form-group">
      <label for="">Ultima fecha de vacunación *</label>
      <input  name="ultima_fecha_vacunacion" type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ultima fecha de vacunación" onChange={({target})=>setMascota(target.name,target.value)}/>
    </div>
    <div class="form-group">
      <label for="">Color *</label>
      <input  name="color" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Color" onChange={({target})=>setMascota(target.name,target.value)}/>
    </div>
    <div class="form-group">
      <label for="">Pelaje *</label>
      <select  name="pelaje" className="form-control" onChange={({target})=>setMascota(target.name,target.value)}>
        <option value="-1">Seleccinar</option>
        <option value="largo">Largo</option>
        <option value="corto">corto</option>
      </select>
    </div>
    <div class="form-group">
      <label for="">Descripción *</label>
      <textarea  name="descripcion" className="form-control" cols="30" rows="5" placeholder="Descripción" onChange={({target})=>setMascota(target.name,target.value)}></textarea>
    </div> */}
    <button type="reset" class="btn btn-light" onClick={()=>registrar()}>Envíar</button>
  </form>
);

export default Register;
