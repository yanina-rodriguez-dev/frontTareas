import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {

  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTareas([...tareas,tarea]);
    //limpio input 
    setTarea('');
  }
const borrarTarea =(nombreTarea)=>{
    let copiaTareas = tareas.filter((itemTarea)=>itemTarea!== nombreTarea)
setTareas(copiaTareas);
}

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button type="submit" variant="warning" className="ms-2">
            +
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </>
  );
};

export default FormularioTareas;
