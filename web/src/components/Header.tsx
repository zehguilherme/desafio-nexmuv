import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to={"/"}>
          Desafio Nexmuv
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Sobre</Nav.Link>
          </Nav>

          <Nav.Link href="login">Sair</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
