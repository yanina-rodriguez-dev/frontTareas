import './App.css'
import Container from "react-bootstrap";

function App() {
  

  return (
    <>
    <Container className="my-5 main">
    <h1 className='display-4 text-center'>Lista de tareas</h1>
    <hr />
    <FormularioTarea></FormularioTarea>
    </Container>
    <footer>
<p>&copy;Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
