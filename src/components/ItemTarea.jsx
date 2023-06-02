import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between inputs">
      {tarea}
      <Button variant="danger" onClick={() => borrarTarea(tarea)}>
       X
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
