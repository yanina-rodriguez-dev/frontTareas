import { Container, Row } from "react-bootstrap";
import FormularioTarea from "./producto/FormularioTareas";

const Inicio = () => {
  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fondo cafe"
      />
      <Container className="my-5 main">
        <h1 className="display-4 text-center text-light">Lista de tareas</h1>
        <hr />
        <FormularioTarea></FormularioTarea>
      </Container>
    </section>
  );
};

export default Inicio;
