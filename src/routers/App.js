import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bienvenida from "../pages/Bienvenida";
import OpcionesInicio from "../pages/OpcionesInicio";
import InicioSesion from "../pages/IniciarSesion";
import Registro from "../pages/Registrarse";
import Entrada from "../pages/entrada";
import Inicio from "../pages/Inicio"
import perfil from "../pages/perfil"
import editar from "../pages/editar"
import menu from "../pages/menu"
import wpp from "../pages/wpp"
import calendario from "../pages/calendario"
import promociones from "../pages/promociones"
import importante from "../pages/importante"
import miscitas from "../pages/miscitas"
import cancelarcita from "../pages/cancelarcita"
import paginacita from "../pages/paginacita"
import ubicacion from "../pages/ubicacion"
import pago from "../pages/pago"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Bienvenida} />
        <Route exact path="/opcionesinicio" component={OpcionesInicio} />
        <Route exact path="/iniciarsesion" component={InicioSesion} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/entrada" component={Entrada} />
        <Route exact path="/Inicio" component={Inicio} />
        <Route exact path="/perfil" component={perfil} />
        <Route exact path="/editar" component={editar} />
        <Route exact path="/menu" component={menu} />
        <Route exact path="/wpp" component={wpp} />
        <Route exact path="/calendario" component={calendario} />
        <Route exact path="/promociones" component={promociones} />
        <Route exact path="/importante" component={importante} />
        <Route exact path="/miscitas" component={miscitas} />
        <Route exact path="/cancelarcita" component={cancelarcita} />
        <Route exact path="/paginacita" component={paginacita} />
        <Route exact path="/ubicacion" component={ubicacion} />
        <Route exact path="/pago" component={pago} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
