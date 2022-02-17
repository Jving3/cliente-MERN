import React, { useState, useEffect } from "react";
import clienteApi from '../../config/api'

function Personas() {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const loadPost = async () => {
      setLoading(true);
      const response = await clienteApi.get("/getUsers")
      setPosts(response.data);
      setLoading(false)
    }

    loadPost();

  }, []);


    const persona = posts.filter(item => item.FIRSTNAME.includes('Jorge'));
    console.log(persona[0]);

    const cantidad = persona.map(item => item.CANT).reduce((prev, curr) => prev + curr, 0);
    console.log('TOTAL:' + cantidad);


  

  return (

    <div className="Contenedor-App">
        
        <div className="seccion-principal">

                <main>

                     {loading ? (
                        <h4>Loading...</h4>
                    ) : (
                        <ul>
                            <li><h1>TABLA PERSONAS:</h1></li>
                            {/* {<li key={persona.ID}>NOMBRE: {persona[0].FIRSTNAME} | PRODUCCION: {cantidad}</li>} */}
                        </ul>
                    )}  

                </main>
        </div>

    </div>
  );
}

export default Personas;