import { Button, ListGroup } from "react-bootstrap";
i


const ItemTarea = (tarea) => {
    return (
        <ListGroup.Item>
            {tarea}
            <Button variant="danger" onclick={()=> borrarTarea(tarea)}>Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;