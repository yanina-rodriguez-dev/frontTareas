
import { useEffect } from "react";
import FormularioTareas from "./producto/FormularioTareas"
import { obtenerListaTareas } from "../../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
 const [productos, setProductos] = useState([]);

   useEffect(()=>{
     obtenerListaTareas().then((respuesta)=>{
      if(respuesta){
        setProductos(respuesta);
      }else{
        Swal.fire('Error', 'Intente realizar esto en unos minutos', 'error')
      }
     }
     )
   },[])
    return (
      <div className="m-5">
        <h1 className="text-light text-center">Administrar Lista</h1>
        <FormularioTareas></FormularioTareas>
      </div>
    );
};

export default Administrador;