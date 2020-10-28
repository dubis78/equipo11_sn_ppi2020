import React from "react";
import "../Style/style.css";
import Logo from "../images/logoDOF.jpg";

class Bienvenida extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4 text-center">
            <div className="row text-center">
              <div className="col">
                <br />
                <br />
                <br />
                <center>
                  <img className="Logo" src={Logo} alt="Logo" />
                </center>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <br />
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <br />
                <br />
                <button type="button" class="btn btn-dark">
                  <a href="opcionesinicio">Iniciar</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default Bienvenida;
