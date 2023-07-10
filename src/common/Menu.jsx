import { Navbar, Container, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar className="bg-success">
      <Container>
        <Navbar.Brand href="#home">
          Vida organizada
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Menu;
