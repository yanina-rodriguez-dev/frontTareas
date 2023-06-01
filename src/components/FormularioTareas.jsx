import { Form, Button} from "react-bootstrap";

const FormularioTareas = () => {
    return (
        <Form>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="warning"></Button>
        </Form.Group>
      </Form>
    );
};

export default FormularioTareas;