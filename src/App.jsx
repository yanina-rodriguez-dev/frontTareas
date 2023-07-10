import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./common/Menu";
import Footer from "./common/Footer";
import Administrador from "./components/views/Administrador"
import Inicio from "./components/views/Inicio"
import Login from "./components/views/Login"
import Registro from "./components/views/Registro"
import { BrowserRouter , Routes, Route } from "react-router-dom";
import ListaTareas from "./components/views/producto/ListaTareas";


function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
    <Routes>
      <Route exact path="./" element={<Inicio></Inicio>}></Route>
      <Route exact path="./administrador" element={<Administrador></Administrador>}></Route>
      <Route exact path="./login" element={<Login></Login>}></Route>
      <Route exact path="./registro" element={<Registro></Registro>}></Route>
      <Route exact path="./administrador/listatareas" element={<ListaTareas></ListaTareas>}></Route>
    </Routes>
     
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
