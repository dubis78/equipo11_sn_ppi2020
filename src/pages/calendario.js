import React from "react";
import "../Style/style7.css";


class menu extends React.Component {
  render() {
    return (
      <div>
       <div  className="navegador">
          <a href="perfil"><img className="menuh Menuh-perfil" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="user"/></a>
          <a href="menu"><img className="menuh" src="https://lh3.googleusercontent.com/proxy/OHfcZiQO5Ubuzuk1lBfQM0O5V2QkNKzeRX6cUSfoFwFj8w1uPaGFR2P5Qnj4vOch5xiSSfZMA6tiRujJFDRGc5w4ifVVQsPkqyMlhoEJU8A-nRW0d8A" alt="menu"/></a>    
          Calendario
        </div>
        <div className="container-fluid">
        <div><center>
        <h3>Agenda Tu cita</h3>
          <img className="puffles" src="https://cdn.pixabay.com/photo/2013/07/13/12/04/calendar-159098_960_720.png" alt="Logo"/></center>
        </div>
        <br/>
        <br/>
        <br/>
          <a href="inicio"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/ ></a>
          <a href="ubicacion"><img className="flechaD" src="https://images.vexels.com/media/users/3/136745/isolated/preview/8f36b91326bec8f8100da818b58e20de-flecha-de-rotaci--n-derecha-by-vexels.png" alt="flechaD"/></a>
      </div> 
       </div>
      
    );
  }
}

export default menu;