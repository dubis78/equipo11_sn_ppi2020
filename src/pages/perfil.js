import React from "react";


class perfil extends React.Component {
  render() {
    return (
      <div className="container-fluid perfil">
        <div className="row">
          <div className="col">
            
               <button id="editar" type="button" class="btn btn-width">
               
</button>
<br/>
<div><center>
          <img className="puffles" src="https://img.icons8.com/bubbles/2x/user.png" alt="user"/></center>
          </div>
            

<h3 class="text-center"> User.313</h3>
<br/>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="persona@gmail.com"/>
    </div>
  </div>
</form>
<br/>

 <center><button type="button" class="btn btn-dark">
                  <a href="IniciarSesion">cerrar sesion</a>
 </button></center>
<br/><br/>
<center><button type="button" class="btn btn-dark">
                  <a href="miscitas">Mis citas</a>
 </button></center>
<br/><br/>
 
<div>
<center><a href="editar"><img className="calendario" src="https://i.pinimg.com/originals/e6/c2/0e/e6c20ec105eaa6752c4f9d1f306eab66.png" alt="configurar"/></a></center>
<a href="editar"><center><h5>editar</h5></center></a>
</div>

<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<div>
<a href="inicio"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/></a>
</div>
          </div>
        </div>
      </div>
    );
  }
}

export default perfil;