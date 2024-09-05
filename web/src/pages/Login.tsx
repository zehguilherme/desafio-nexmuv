import { FormEvent } from "react";
import { Button, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  function handleNavigateToLoginPage(event: FormEvent) {
    event.preventDefault();

    navigate("/");
  }

  return (
    <Stack
      as={"main"}
      className="vh-100 justify-content-center align-items-center"
    >
      <h1 className="mb-3">Login</h1>

      <Form onSubmit={handleNavigateToLoginPage}>
        <Form.Group className="mb-3" controlId="inputUsername">
          <Form.Label>Usuário</Form.Label>

          <Form.Control type="text" autoFocus />
        </Form.Group>

        <Form.Group className="mb-3" controlId="inputPassword">
          <Form.Label>Senha</Form.Label>

          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check type="checkbox" label="Continuar logado" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>
    </Stack>
  );
}
