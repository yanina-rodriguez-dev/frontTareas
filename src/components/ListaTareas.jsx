import {ListGroup} from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = ({tareas, borrarTarea}) => {
    return (
        <ListGroup>
{
    tareas.map((tarea, indiceTarea)=> <ItemTarea key={indiceTarea} tarea={tarea} borrarTarea={borrarTarea}> </ItemTarea>)
}
       
      </ListGroup>
    );
};

export default ListaTareas;