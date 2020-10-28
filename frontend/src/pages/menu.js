import React from "react";
import "../Style/style7.css";


class menu extends React.Component {
  render() {
    return (
      <div>
       <div  className="navegador">
          <a href="perfil"><img className="menuh Menuh-perfil" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="user"/></a>
          <a href="menu"><img className="menuh" src="https://lh3.googleusercontent.com/proxy/AcZe_DNMRDVtHVeHn3gGiIWgXg1zuplDmICPrcz7EqNbYqYM7MK36gbvDF6BV3I8MtQ1BHSJ79Rus8iyi0l8wPce4lYOyxSMWUJYzjIbwA6c8VtLPk0" alt="menu"/></a>    
         CONFIGURACION Y DATOS
        </div>
        <div className="container-fluid">
        
          <br/>
        <button type="submit" className="btnmenu1 btnmenu "><a className="Link" href="promociones">
          Promociones </a></button>
          <br/>
          
          <div><button type="submit" className="btnmenu2 btnmenu"><a className="Link" href="importante">
          importante</a></button></div>
          
          <div><button type="submit" className="btnmenu3 btnmenu"><a className="Link" href="calendario">
          Agenda tu cita </a></button></div>
         
        <div><button type="submit" className="btnmenu5 btnmenu"><a className="Link" href="logros">
          instrucciones</a></button></div>
          
          <div><button type="submit" className="btnmenu5 btnmenu"><a className="Link" href="logros">
          Contacto</a></button></div>

          <div><button type="submit" className="btnmenu5 btnmenu"><a className="Link" href="logros">
          perfil veterinario</a></button></div>

          <div><button type="submit" className="btnmenu5 btnmenu"><a className="Link" href="logros">
          calificación</a></button></div>

          <a href="inicio"><img className="Regresar2" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/ ></a>
      </div> 
       </div>
      
    );
  }
}

export default menu;