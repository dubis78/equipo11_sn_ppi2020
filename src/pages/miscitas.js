import React from "react";
import Logo from "../images/logoDOF.jpg";

class miscitas extends React.Component {
  render() {
    return (
      <div>
       <div  className="navegador">
          <a href="perfil"><img className="menuh Menuh-perfil" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="user"/></a>
          <a href="menu"><img className="menuh" src="https://lh3.googleusercontent.com/proxy/OHfcZiQO5Ubuzuk1lBfQM0O5V2QkNKzeRX6cUSfoFwFj8w1uPaGFR2P5Qnj4vOch5xiSSfZMA6tiRujJFDRGc5w4ifVVQsPkqyMlhoEJU8A-nRW0d8A" alt="menu"/></a>    
         MIS CITAS
        </div>
        <div className="container-fluid">
        <div>
        <h5>Admin</h5>
        <h6>13 octubre</h6>
        <h9>con el doctor antonio de 3:10pm a 3:30 pm
        con recomendaciones de no darle muchas porciones</h9>
        
        </div>
       
        <div>
          <center>
         <img className="Logo" src={Logo} alt="Logo" />
          </center>
          <center><button type="submit" className="btnmenu2 btnmenu"><a className="Link" href="cancelarcita">
          Cancelar cita</a></button></center>
        

        </div>
        <br/>
          <a href="perfil"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/ ></a>
        
      
      </div> 
       </div>
      
    );
  }
}

export default miscitas;