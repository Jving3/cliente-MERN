import React, { useReducer } from 'react';
import ActReducer from './actReducer';
import ActContext from './actContext';

import { 
    OBTENER_ACTUALIZAR,
    // ACTUALIZAR_EXITOSO,
    // ACTUALIZAR_ERROR,
    CERRAR_ACTUALIZAR
} from '../../types';

const ActState = props => {
    const initialState = {
        actualizado: null,
        mensaje: null, 
        actualizando: null
    }

    const [ state, dispatch ] = useReducer(ActReducer, initialState);

    // Cambiar el estado al pulsar Actualizar
    const obtenerActualizar = () => {
        dispatch({
            type: OBTENER_ACTUALIZAR
        })
    }

    // Cambiar el estado al pulsar Actualizar para bloqueo de boton
    const cerrarActualizar= () => {
        dispatch({
            type: CERRAR_ACTUALIZAR
        })
    }

    return(
        <ActContext.Provider
            value={{
                actualizado: state.actualizado,
                mensaje: state.mensaje,
                actualizando: state.actualizando,
                obtenerActualizar,
                cerrarActualizar
            }}
        >{props.children}

        </ActContext.Provider>
    )
}
export default ActState;
