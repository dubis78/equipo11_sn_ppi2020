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
          <img className="puffles" src="https://images.vexels.com/media/users/3/146891/isolated/preview/76fcdee6eb30cd081fb893e7a866c70d-mano-con-billete-de-un-d--lar-by-vexels.png" alt="Logo"/></center>
        </div>
 
        <br/>
        <h4 class="text-center">metodo de pago efectivo</h4>
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
      <input type="text" class="form-control" placeholder="devuelta"/>
    </div>
  </div>
</form>
  <br/>
  <center><button type="button" class="btn btn-dark">
  <a href="confirmacionpago">confirmar</a>
  </button></center>
<br/>
<br/>




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