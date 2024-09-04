import { Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Stack
      as={"main"}
      className="vh-100 justify-content-center align-items-center"
    >
      <h1 className="mb-3">Login</h1>

      <Form>
        <Form.Group className="mb-3" controlId="inputUsername">
          <Form.Label>Usuário</Form.Label>

          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="inputPassword">
          <Form.Label>Senha</Form.Label>

          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check type="checkbox" label="Continuar logado" />
        </Form.Group>

        <Link to={"/"} className="w-100 btn btn-primary">
          Entrar
        </Link>
      </Form>
    </Stack>
  );
}
