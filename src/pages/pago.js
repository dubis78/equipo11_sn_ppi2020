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
          <img className="puffles" src="https://i.pinimg.com/originals/52/d7/7c/52d77c0ac489637cf0c59ab21c60e9ea.png" alt="Logo"/></center>
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
  <a href="pedido">Siguiente</a>
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