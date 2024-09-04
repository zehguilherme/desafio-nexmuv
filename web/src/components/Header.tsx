import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink to={"#"} className="nav-link active">
              Sobre
            </NavLink>
          </Nav>

          <NavLink to={"login"} className="nav-link">
            Sair
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
