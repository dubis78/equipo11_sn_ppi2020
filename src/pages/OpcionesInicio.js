import React from "react";
import "../Style/style2.css";
import Logo from "../images/logoDOF.jpg";

class OpcionesInicio extends React.Component {
  render() {
    return (
      <div className="container-fluid carta">
        <div className="col mb-4">
          <center>
            <img 
            className="Logo" 
            src={Logo}
            alt="Logo" />
                <br />
                <br />
                <br />
          </center>
          <div className="botones">
            <center>
              {" "}
              <button type="button" class="btn btn-primary">
                <a className="Link" href="iniciarsesion">
                  Iniciar sesion
                </a>
              </button>{" "}
            </center>
            <br></br>
            <div className="container-fluid">
              <center>
                {" "}
                <button type="button" class="btn btn-primary">
                  <a className="Link" href="registro">
                    Registrase
                  </a>
                </button>{" "}
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OpcionesInicio;
