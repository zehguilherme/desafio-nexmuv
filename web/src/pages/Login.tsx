import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

        <Button
          as="a"
          href="/"
          variant="primary"
          className="w-100"
          type="submit"
        >
          Entrar
        </Button>
      </Form>
    </Stack>
  );
}
