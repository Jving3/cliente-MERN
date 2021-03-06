import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';
import Operaciones from './components/operaciones/Operaciones';
import ActState from './context/actualizar/actState';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  return (
    <ActState>
        <ProyectoState>
          <TareaState>
            <AlertaState>
              <AuthState>
                    <Router>
                        <Routes>
                              <Route path="/" element={<Login/>} />
                              <Route path="/nueva-cuenta" element={<NuevaCuenta/>} />
                              <Route path="/operaciones" element={<Operaciones/>} />
                              <Route path="/proyectos" element={<Proyectos/>} />
                        </Routes>
                    </Router>
              </AuthState>
            </AlertaState>
          </TareaState>
        </ProyectoState>
    </ActState>
  );
}

export default App;
