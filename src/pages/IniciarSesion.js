import React from "react";
import Logo from '../images/logoDOF.jpg'

class InicioSesion extends React.Component {
  render() {
    return (
      <div className="container-fluid carta">
        <center>
          <div className="encabezado">
            <div className="col-sm-4 col-md-4 col-lg-4 text-center">
              <img className="Usuario" src="https://img.icons8.com/material-rounded/24/000000/user-male-circle.png" alt="Icon-User"/>
              <h5>Inicia Sesion </h5>
            </div>
          </div>
        </center>
        <center>
          <div className="Cuerpo">
            <center>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <center>
                <img
                  className="Logo"
                  src={Logo}
                  alt="Logo"
                />
              </center>
            </div>
            </center>
            <div>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1 text">Correo Electronico</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <small id="emailHelp" class="form-text text">Este correo no sera usado para compartir su informacion</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1 text">Contraseña</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" class="btn"><a className="Link" href="entrada">
          Iniciar Sesion</a></button>
              </form>
            </div>
          </div>
        </center>
        <div>
            <a href="opcionesinicio"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/></a>
        </div>
      </div>
    );
  }
}
export default InicioSesion;
