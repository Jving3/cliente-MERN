import Barra from "../layout/Barra";
import Operacion from "./Operacion";
import Personas from "./Personas";

function Operaciones() {

 
  return (

    <div className="Contenedor-App">
        
        <div className="seccion-principal">
                <Barra />

                <main>

                <Operacion/>
                <button>Actualizar</button>
                </main>
        </div>

    </div>
  );
}

export default Operaciones;