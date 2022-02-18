import React, { useState, useEffect, useContext } from "react";
import ActContext from "../../context/actualizar/actContext"
import clienteApi from '../../config/api'

function Operacion() {

   // Extraer la información de autenticación
   const actContext = useContext(ActContext);
   const { cargando, actualizado, cerrarActualizar, obtenerActualizar } = actContext;


  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const loadPost = async () => {
      setLoading(true);
      const response = await clienteApi.get("/getProd")
      setPosts(response.data);
      setLoading(false)
    }
    loadPost();

  }, [("/getProd")]);


    const cant = posts.filter(item => item.ACTIVIDAD.includes('PICK'));
    // console.log(cant[0]);

    const picking = cant.map(item => item.COMPLETED_QUANTITY).reduce((prev, curr) => prev + curr, 0);
    console.log(cant[0], 'TOTAL:' +picking);


  

  return (

    <div className="Contenedor-App">
        
        <div className="seccion-principal">

                <main>

                  <ul>
                    {actualizado ? <li>NOMBRE OPERADOR: {cant[0].USUARIO} | PRODUCCION: {picking}</li> : null}
                  </ul>
                      
                <button onClick={() => cerrarActualizar()}>Actualizar</button>
                
                </main>
        </div>

    </div>
  );
}

export default Operacion;