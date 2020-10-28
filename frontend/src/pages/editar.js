import React from "react";


class editperfil extends React.Component {
  render() {
    return (
      <div className="container-fluid perfil">
        <div className="row">
          <div className="col">
            
               <button id="editar" type="button" class="btn btn-width">
               
</button>
<center><h4>Mi Perfil</h4></center>
          <div>
          <center><img className="puffles" src="https://img.icons8.com/bubbles/452/edit-user.png" alt="user"/></center>
          </div>

<center><h9> Cambiar Foto</h9></center>
<br/><br/>
<h3 class="text-center">Cambiar Nombre</h3>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="andres"/>
    </div>
  </div>
</form>
<br/>
<h3 class="text-center">Cambiar Contraseña</h3>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="*************"/>
    </div>
  </div>
</form>
<br/>
<h3 class="text-center">Cambiar Correo</h3>
 <form>
  <div class="col">
    <div class="col">
      <input type="text" class="form-control" placeholder="UserName@gmail.com"/>
    </div>
  </div>
</form>
<br/>

 <center><button type="button" class="btn btn-secondary">
 <a href="perfil">Aceptar</a>
 </button></center>
<br/><br/>

<div>
<a href="perfil"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/></a>
</div>

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

export default editperfil;