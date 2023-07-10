import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTareas";
import Menu from "./common/Menu";
import Footer from "./common/Footer";


function App() {
  return (
    <>
      <Menu></Menu>
      <Container className="my-5 main">
        <h1 className="display-4 text-center text-light">Lista de tareas</h1>
        <hr />
        <FormularioTarea></FormularioTarea>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
