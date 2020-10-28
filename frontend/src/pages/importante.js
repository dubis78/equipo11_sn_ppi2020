import React from "react";
import Logo from "../images/logoDOF.jpg";

class menu extends React.Component {
  render() {
    return (
      <div>
       <div  className="navegador">
          <a href="perfil"><img className="menuh Menuh-perfil" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="user"/></a>
          <a href="menu"><img className="menuh" src="https://lh3.googleusercontent.com/proxy/OHfcZiQO5Ubuzuk1lBfQM0O5V2QkNKzeRX6cUSfoFwFj8w1uPaGFR2P5Qnj4vOch5xiSSfZMA6tiRujJFDRGc5w4ifVVQsPkqyMlhoEJU8A-nRW0d8A" alt="menu"/></a>    
          IMPORTANTES
        </div>
        <div className="container-fluid">
        <div>
        <h4>Recomendaciones</h4>
        
        <h9>(recomiendo no darle mucho alimento solido a la 
mascota susana darle muchos liquidos como suero y 
agua ademas de darle sus medicamentos a tirmpo.)</h9>
        <br/>
<br/>
       
        </div>
        
        <div>
        <center>
        <img className="Logo" src={Logo} alt="Logo" />
          </center>
        </div>
          <a href="menu"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/ ></a>
         
      </div> 
       </div>
      
    );
  }
}

export default menu;