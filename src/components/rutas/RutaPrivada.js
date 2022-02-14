import React, { useContext, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

export const RutaPrivada = ({ component: Component, ...props  }) => {

    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return ( 
        <Route { ...props } render={ props => !autenticado && !cargando ?  (
            <Navigate to="/"/>
        )  : (
            <Component {...props} />
        ) } />

     );
}
 
export default RutaPrivada;