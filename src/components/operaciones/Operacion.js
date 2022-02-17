import React, { useState, useEffect } from "react";
import clienteApi from '../../config/api'

function Operacion() {

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

  }, []);


    const cant = posts.filter(item => item.ACTIVIDAD.includes('PICK'));
    // console.log(cant[0]);

    const picking = cant.map(item => item.COMPLETED_QUANTITY).reduce((prev, curr) => prev + curr, 0);
    console.log(cant[0], 'TOTAL:' +picking);


  

  return (

    <div className="Contenedor-App">
        
        <div className="seccion-principal">

                <main>

                     {loading ? (
                        <h4>Loading...</h4>
                    ) : (
                        <ul>
                            <li><h1>FORUS BEE:</h1></li>
                            {/* {<li>NOMBRE OPERADOR: {cant[0].USUARIO} | PRODUCCION: {picking}</li>} */}
                        </ul>
                    )}  

                </main>
        </div>

    </div>
  );
}

export default Operacion;