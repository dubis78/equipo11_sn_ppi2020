import React from "react";
import "../Style/style4.css";
import Logo from '../images/logoDOF.jpg'

class Registrarse extends React.Component {
  render() {
    return (
      <div className="container-fluid carta">
        <center>
          <div className="encabezado">
            <div className="col-sm-4 col-md-4 col-lg-4 text-center">
              <img
                className="Usuario"
                src="https://img.icons8.com/material-rounded/24/000000/user-male-circle.png"
                alt="Icon-User"
              />
              <h5>Inicia Sesion para continuar</h5>
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
                <br />
                <br />
                
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Nombre Usuario" />
                  <small id="text" class="form-text text">Este sera visible para los demas usuarios</small>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo Electronico"/>
                  <small id="emailHelp" class="form-text text">Este correo no sera usado para compartir su informacion</small>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmar contraseña"/>
                </div>
                <button type="" class="btn">
                <a className="Link" href="entrada">
          Registrarse</a></button>
              </form>
            </div>
          </div>
        </center>
        <div>
          
            <a href="opcionesInicio"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/ ></a>
        </div>
      </div>
    );
  }
}
export default Registrarse;