import { Button, ListGroup } from "react-bootstrap";


const ItemTarea = ({ tarea, borrarTarea, editarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between inputs">
      {tarea}
      <div>
      <Button variant="danger" onClick={() => borrarTarea(tarea)}>
       Borrar
      </Button>
      <Button  className="ms-2" onClick={()=>editarTarea(tarea)} variant="warning">
      Editar
      </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;
// prueba