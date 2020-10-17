import React from "react"
import "../Style/style.css";

class Pago extends React.Component {
  render() {
    return (
<div className="container">
<div className="row">
  <div className="col">
        <div>
        <center>
          <img className="puffles" src="https://image.flaticon.com/icons/png/512/20/20925.png" alt="Logo"/></center>
        </div>
 
        <br/>
        <h4 class="text-center">Ubicación</h4>
        <br />
       
        
        

        <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre"/>
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" placeholder="Dirección"/>
    </div>
    <br/>
    <div class="col">
      <input type="text" class="form-control" placeholder="confirmar direccion"/>
    </div>
  </div>
</form>
  <br/>
  <center><button type="button" class="btn btn-dark">
  <a href="pago">Siguiente</a>
  </button></center>
<br/>
<br/>
<div>
<center><button type="cancelar" class="btn btn-dark">
  <a href="inicio">cancelar</a>
  </button></center>
</div>


        <br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>

      </div>
    </div>


  </div>

    

       );

    }
}
export default Pago;