import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Proyectos from './components/proyectos/Proyectos'

import RutaPrivada from './components/rutas/RutaPrivada'

import ProyectoState from './context/proyecto/proyectoState'
import TareaState from './context/tareas/tareaState'
import AlertaState from './context/alertas/AlertaState'
import AuthState from './context/auth/authState'

import authToken from './config/token'

const token = localStorage.getItem('token');

if(token){
  authToken(token)
}

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
