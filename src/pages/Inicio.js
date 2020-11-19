import React from "react";
import "../Style/style6.css";
import Logo from "../images/logoDOF.jpg";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <div className="navegador">
          <a href="perfil"><img className="menuh Menuh-perfil" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="user"/></a>
          <a href="menu"><img className="menuh" src="https://lh3.googleusercontent.com/proxy/AcZe_DNMRDVtHVeHn3gGiIWgXg1zuplDmICPrcz7EqNbYqYM7MK36gbvDF6BV3I8MtQ1BHSJ79Rus8iyi0l8wPce4lYOyxSMWUJYzjIbwA6c8VtLPk0" alt="menu"/></a>     
        
          <input type="text" className="Buscar" aria-describedby="search"/>
        
          <img className="lupa" src="https://image.flaticon.com/icons/png/512/57/57477.png" alt="lupa"/>

          <div>
            <div>
            <br/>
              <h9>Admin</h9>
              <br/>
              <h7>Desprende la barra superior para mas configuraciones
                y dale en el icono inferior derecho para entrar a el chat y en el icono inferior izquierdo agenda tu cita</h7>
            </div>
            
            <div>
            <br />
                <br />
                <br />
                <center>
                  <img className="Logo" src={Logo} alt="Logo" />
                </center>
            </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br />
                <br/>
              <a href="calendario"><img className="calendario" src="https://www.orientacionparaelempleo.com/wp-content/uploads/2016/02/icono-calendario1-150x150.png" alt="calendario"/></a>
              <a href="wpp"><img className="wpp" src="https://1000marcas.net/wp-content/uploads/2019/11/Logo-Whatsapp.png" alt="wpp"/></a>
          </div>
       </div>
      </div>
    );
  }
}

export default Inicio;