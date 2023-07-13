import { Container } from "react-bootstrap";
import ListaTareas from "./producto/ListaTareas";
import { useState, useEffect } from "react";

const Inicio = () => {
  const tareasDelLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas] = useState(tareasDelLocalStorage);

  useEffect(() => {
    localStorage.setItem("listaTareas", JSON.stringify(tareas));
  }, [tareas]);

  return (
    <section className="mainSection">
      <Container className="my-5 main">
        <h1 className="display-4 text-center text-light">Lista de tareas</h1>
        <hr />
        <ListaTareas tareas={tareas} setTareas={setTareas} />
      </Container>
    </section>
  );
};

export default Inicio;
