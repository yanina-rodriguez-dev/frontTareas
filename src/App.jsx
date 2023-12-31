import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./common/Menu";
import Footer from "./common/Footer";
import Administrador from "./components/views/Administrador";
import Inicio from "./components/views/Inicio";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaTareas from "./components/views/producto/ListaTareas";
import { useState } from "react";
import Error404 from "./components/views/Error404";
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdministrador from "./routes/RutasAdministrador";


function App() {
  const usuarioSessionStorage =
    JSON.parse(sessionStorage.getItem("usuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          path="./administrador/*"
          element={
        <RutasProtegidas>
          <RutasAdministrador></RutasAdministrador>
        </RutasProtegidas>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route
          exact
          path="./administrador/listatareas"
          element={<ListaTareas></ListaTareas>}
        ></Route>
        <Route
        path="/administrador"
        element={<Administrador></Administrador>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
