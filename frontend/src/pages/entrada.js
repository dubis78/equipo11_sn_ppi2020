import React from "react";
import "../Style/style5.css";


class Entrada extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div><center>
          <img className="puffles" src="https://www.nicepng.com/png/detail/938-9383467_perro-png-tabby-catpuffle.png" alt="Logo"/></center>
          <div>
            <h6>Hola usuario.</h6>
<p>Bienvenido a Driver of animals esta
es una aplicación que te permitira tener un medico veterinario en casa .podiendo agendar tu cita con:

*Un chat 24 horas para hablar con el medico de turno.

Espero que tengas una buena experiencia con driver of animals.
Gracias por descargar nuestra APP </p>

          </div>
          <br />
          <br />
          <a href="Inicio"><img className="flechaD" src="https://images.vexels.com/media/users/3/136745/isolated/preview/8f36b91326bec8f8100da818b58e20de-flecha-de-rotaci--n-derecha-by-vexels.png" alt="flechaD"/></a>
          
          <a href="opcionesInicio"><img className="Regresar" src="https://img.icons8.com/windows/50/000000/return.png" alt="Flecha"/ ></a>
        </div>
      </div>
    );
  }
}

export default Entrada;