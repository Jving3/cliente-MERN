import React, { Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const ListadoTareas = () => {

        // Extrar proyectos de state inicial
        const proyectosContext = useContext(proyectoContext);
        const { proyecto, eliminarProyecto } = proyectosContext;
    
        // Si no hay proyecto seleccionado
        if(!proyecto) return <h2>Selecciona un proyecto</h2>;
    
        // Array destructuring para extraer el proyecto actual
        const [proyectoActual] =  proyecto;

        // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

        const tareasProyecto = [
            {nombre: 'Elección de KPI´s', estado: true},
            {nombre: 'Diseño de Formulas', estado: false},
            {nombre: 'Acceso a Bases de Datos', estado: false},
            {nombre: 'Diseño Front-end', estado: true},
        ]

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre} </h2>

            <ul className="listado-tareas">
            {tareasProyecto.length === 0 
               ? (<li className="tarea"><p>No hay tareas</p></li>) 
                : tareasProyecto.map( tarea => (
                    <Tarea 
                        tarea={tarea}
                    />
                ))
            }
            </ul>

            <button     
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;