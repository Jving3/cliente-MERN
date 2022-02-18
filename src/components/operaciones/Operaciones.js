import React, { useContext, useEffect } from 'react';
import Barra from "../layout/Barra";
import Operacion from "./Operacion";
import ActContext from "../../context/actualizar/actContext"

function Operaciones() {

      // Extraer la información de autenticación
      const actContext = useContext(ActContext);
      const { cargando, actualizado, cerrarActualizar, obtenerActualizar } = actContext;
  
      useEffect(() => {
          obtenerActualizar();
          // eslint-disable-next-line
      }, []);
 
  return (

    <div className="Contenedor-App">
        
        <div className="seccion-principal">
                <Barra />

                <main>
                  <h1>PRODUCCIÓN DEL DÍA</h1>
                        <ul>
                            <Operacion/>
                        </ul>
                  
                </main>
        </div>

    </div>
  );
}

export default Operaciones;