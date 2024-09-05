import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export function PartnerRegister() {
  return (
    <>
      <Header />

      <Container className="py-4">
        <Link to={"/"} className="btn btn-secondary mb-4">
          Voltar
        </Link>

        <h1 className="h2 mb-4">Cadastre um novo parceiro</h1>

        <Row>
          <Form>
            <Col>
              <Form.Group className="mb-3" controlId="inputName">
                <Form.Label>Nome</Form.Label>

                <Form.Control type="text" autoFocus />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="inputDescription">
                <Form.Label>Descrição</Form.Label>

                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="inputGitRepository">
                <Form.Label>Repositório Git</Form.Label>

                <Form.Control type="url" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="inputUrlDoc">
                <Form.Label>URL Documento</Form.Label>

                <Form.Control type="url" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="inputClientes">
                <Form.Label>Clientes</Form.Label>

                <Form.Control
                  type="text"
                  aria-describedby="inputClientesHelpBlock"
                />

                <Form.Text id="inputClientesHelpBlock" muted>
                  Exemplo: Cliente 1, Cliente 2 (Separado por vírgulas)
                </Form.Text>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="inputProjetos">
                <Form.Label>Projetos</Form.Label>

                <Form.Control
                  type="text"
                  aria-describedby="inputProjetosHelpBlock"
                />

                <Form.Text id="inputProjetosHelpBlock" muted>
                  Exemplo: Projeto 1, Projeto 2 (Separado por vírgulas)
                </Form.Text>
              </Form.Group>
            </Col>

            <Stack direction="horizontal" className="justify-content-end">
              <Button variant="success" type="submit">
                Cadastrar novo parceiro
              </Button>
            </Stack>
          </Form>
        </Row>
      </Container>
    </>
  );
}
