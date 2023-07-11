import { Container, Row } from "react-bootstrap";
import FormularioTarea from "./producto/FormularioTareas";

const Inicio = () => {
  return (
    <section className="mainSection">
      <Container className="my-5 main">
        <h1 className="display-4 text-center text-light">Lista de tareas</h1>
        <hr />
        <FormularioTarea></FormularioTarea>
      </Container>
    </section>
  );
};

export default Inicio;
