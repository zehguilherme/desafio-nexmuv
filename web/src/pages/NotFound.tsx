import { Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Container as={"main"} className="vh-100">
      <Stack
        gap={5}
        className="vh-100 justify-content-center align-items-center"
      >
        <h1>Página não encontrada!</h1>

        <Link to={"/"} className="btn btn-success">
          Voltar para a Home
        </Link>
      </Stack>
    </Container>
  );
}
