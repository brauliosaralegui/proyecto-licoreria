import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navegacion() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Licorería Juntada</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Whisky</Nav.Link>
            <Nav.Link href="#pricing">Bebidas Blancas</Nav.Link>
            <Nav.Link href="#pricing">Cervezas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
  </>
  );
}


export default Navegacion