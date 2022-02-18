import { 
    OBTENER_ACTUALIZAR,
    // ACTUALIZAR_EXITOSO,
    // ACTUALIZAR_ERROR,
    CERRAR_ACTUALIZAR
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        // case ACTUALIZAR_EXITOSO:
        //     return {
        //         ...state,
        //         actualizado: true,
        //         mensaje: null,
        //         cargando: false
        //     }
        case OBTENER_ACTUALIZAR: 
            return {
                actualizado: false,
                actualizando: true
            }
        case CERRAR_ACTUALIZAR:
        // case ACTUALIZAR_ERROR:
            // localStorage.removeItem('token');
            return {
                actualizado: true,
                mensaje: action.payload, 
                actualizando: false
            }
        
        default:
            return state;
    }
}