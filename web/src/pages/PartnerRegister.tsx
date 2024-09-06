import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import { Header } from "../components/Header";
import { PartnerProps } from "../schemas/PartnerProps";

export function PartnerRegister() {
  const navigate = useNavigate();

  function partnerNotRegistered() {
    return toast(`Erro ao cadastrar o parceiro!`, {
      type: "error",
    });
  }

  function partnerRegisteredSuccessfully() {
    return toast(`Parceiro cadastrado com sucesso!`, {
      type: "success",
    });
  }

  const { Formik } = formik;

  const PartnerYupSchema = yup.object().shape({
    name: yup.string().required("O campo é obrigatório!"),
    description: yup.string().required("O campo é obrigatório!"),
    repositoryGit: yup.string().required("O campo é obrigatório!"),
    urlDoc: yup.string().required("O campo é obrigatório!"),
    clients: yup
      .array()
      .of(
        yup
          .mixed()
          .test(
            "is-string-or-number",
            "O array deve conter apenas strings ou números",
            (value) => typeof value === "string" || typeof value === "number"
          )
      )
      .required("O campo é obrigatório!"),
    projects: yup
      .array()
      .of(
        yup
          .mixed()
          .test(
            "is-string-or-number",
            "O array deve conter apenas strings ou números",
            (value) => typeof value === "string" || typeof value === "number"
          )
      )
      .required("O campo é obrigatório!"),
  });

  return (
    <>
      <Header />

      <Container as={"main"} className="py-4">
        <Link to={"/"} className="btn btn-secondary mb-4">
          Voltar
        </Link>

        <h1 className="h2 mb-4">Cadastre um novo parceiro</h1>

        <Formik
          initialValues={{
            name: "",
            description: "",
            repositoryGit: "",
            urlDoc: "",
            clients: [],
            projects: [],
            id: "",
          }}
          validationSchema={PartnerYupSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const partnerData: PartnerProps = {
                createdAt: `${new Date().toISOString()}`,
                name: values.name,
                description: values.description,
                repositoryGit: values.repositoryGit,
                urlDoc: values.urlDoc,
                clients: values.clients,
                projects: values.projects,
                id: values.id,
              };

              console.log(partnerData);

              const response = await fetch(
                `${import.meta.env.VITE_PARTNERS_API_URL}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(partnerData),
                }
              );

              if (!response.ok) {
                partnerNotRegistered();

                return;
              }

              partnerRegisteredSuccessfully();

              resetForm();

              navigate("/");
            } catch {
              partnerNotRegistered();
            }
          }}
        >
          {({ handleSubmit, handleChange, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="inputName">
                    <Form.Label>Nome</Form.Label>

                    <Form.Control
                      type="text"
                      name="name"
                      autoFocus
                      value={values.name}
                      isInvalid={!!errors.name}
                      onChange={handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="inputDescription">
                    <Form.Label>Descrição</Form.Label>

                    <Form.Control
                      type="text"
                      name="description"
                      value={values.description}
                      isInvalid={!!errors.description}
                      onChange={handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="inputGitRepository">
                    <Form.Label>Repositório Git</Form.Label>

                    <Form.Control
                      type="url"
                      name="gitRepository"
                      value={values.repositoryGit}
                      isInvalid={!!errors.repositoryGit}
                      onChange={handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.repositoryGit}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="inputUrlDoc">
                    <Form.Label>URL Documento</Form.Label>

                    <Form.Control
                      type="url"
                      name="urlDoc"
                      value={values.urlDoc}
                      isInvalid={!!errors.urlDoc}
                      onChange={handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.urlDoc}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Col>
                <Form.Group className="mb-3" controlId="inputClients">
                  <Form.Label>Clientes</Form.Label>

                  <Form.Control
                    type="text"
                    aria-describedby="inputClientsHelpBlock"
                    name="clients"
                    value={values.clients}
                    isInvalid={!!errors.clients}
                    onChange={handleChange}
                  />

                  <Form.Text id="inputClientsHelpBlock" muted>
                    Exemplo: Cliente 1, Cliente 2 (Separado por vírgulas)
                  </Form.Text>

                  <Form.Control.Feedback type="invalid">
                    {errors.clients}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3" controlId="inputProjects">
                  <Form.Label>Projetos</Form.Label>

                  <Form.Control
                    type="text"
                    aria-describedby="inputProjectsHelpBlock"
                    name="projects"
                    value={values.projects}
                    isInvalid={!!errors.projects}
                    onChange={handleChange}
                  />

                  <Form.Text id="inputProjectsHelpBlock" muted>
                    Exemplo: Projeto 1, Projeto 2 (Separado por vírgulas)
                  </Form.Text>

                  <Form.Control.Feedback type="invalid">
                    {errors.projects}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Stack direction="horizontal" className="justify-content-end">
                <Button variant="success" type="submit">
                  Cadastrar novo parceiro
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
