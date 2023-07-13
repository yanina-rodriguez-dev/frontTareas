import { Route, Routes } from "react-router-dom";
import FormularioTarea from "../components/views/producto/FormularioTareas";


const RutasAdministrador = () => {
    return (
        <div>
            <Routes>
                  <Route exact 
                  path="/administrador"
                element={<FormularioTarea></FormularioTarea>}
                  ></Route>
                
            </Routes>
        </div>
    );
};

export default RutasAdministrador;
