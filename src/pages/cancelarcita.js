import React from "react";
import "../Style/style.css";

class cancelarcita extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div><center>
          <img className="puffles" src="https://vignette.wikia.nocookie.net/clubpenguin/images/4/43/18._Conejo_Blanco.png/revision/latest/scale-to-width-down/340?cb=20200524153004&path-prefix=es" alt="Logo"/></center>
          <div>
            <br/>
            <h6>estimado usuario elige la opcion correcta</h6>
            <br/>

            <p>¿Desea cancelar su cita?</p>

          </div>
          <br />
          <br />
          <a href="miscitas"><img className="no" src="https://image.flaticon.com/icons/png/512/1358/1358126.png" alt="no"/></a>
          
          <a href="paginacita"><img className="si" src="https://image.flaticon.com/icons/png/512/2056/2056113.png" alt="si"/ ></a>
        </div>
      </div>
    );
  }
}

export default cancelarcita;