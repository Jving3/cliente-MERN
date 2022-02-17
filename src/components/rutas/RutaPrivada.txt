import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

export const RutaPrivada = ({children}) => {

    const authContext = useContext(AuthContext);
    const { autenticado, cargando} = authContext;
    


    return autenticado & !cargando
        ? children
        : <Navigate to={"/"}/>
}
 
export default RutaPrivada;