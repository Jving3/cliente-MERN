import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { NavLink } from 'react-router-dom';


const Barra = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion  } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);



    return ( 
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre} </span> </p> : <p className="nombre-usuario">Hola ...</p>}
            

            <nav className="menu-principal">
            <ul>
                <li>
                    <NavLink className= {({isActive}) => (isActive ? "active" : "btn btn-blank cerrar-sesion")} to="/operaciones">Operaciones</NavLink>  
                </li>
                <li>
                     <NavLink className= {({isActive}) => (isActive ? "active" : "btn btn-blank cerrar-sesion")} to="/proyectos">Proyectos</NavLink>  
                </li>
                <li>
                {usuario ? <button className="btn btn-blank cerrar-sesion" onClick={() => cerrarSesion()}>Cerrar Sesión</button> : <NavLink className= {({isActive}) => (isActive ? "active" : "btn btn-blank cerrar-sesion")} to="/">Iniciar Sesión</NavLink>  }
                </li>
                
            </ul>
            </nav>
        </header>
     );
}
 
export default Barra;