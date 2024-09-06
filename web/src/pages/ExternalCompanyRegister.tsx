import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as formik from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

import { Header } from "../components/Header";
import { ExternalCompanyProps } from "../schemas/ExternalCompanyProps";

export function ExternalCompanyRegister() {
  const navigate = useNavigate();

  function externalCompanyNotRegistered() {
    return toast(`Erro ao cadastrar a empresa externa!`, {
      type: "error",
    });
  }

  function externalCompanyRegisteredSuccessfully() {
    return toast(`Empresa externa cadastrada com sucesso!`, {
      type: "success",
    });
  }

  const { Formik } = formik;

  const ExternalCompanyYupSchema = yup.object().shape({
    companyName: yup.string().required("O campo é obrigatório!"),
    collaboratorsCount: yup.number().required("O campo é obrigatório!"),
    isActive: yup.boolean(),
    lastSubmit: yup.string().required("O campo é obrigatório!"),
  });

  return (
    <>
      <Header />

      <Container className="py-4">
        <Link to={"/"} className="btn btn-secondary mb-4">
          Voltar
        </Link>

        <h1 className="h2 mb-4">Cadastre uma nova empresa externa</h1>

        <Formik
          initialValues={{
            companyName: "",
            collaboratorsCount: 0,
            isActive: false,
            lastSubmit: "",
          }}
          validationSchema={ExternalCompanyYupSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const externalCompanyData: Omit<ExternalCompanyProps, "id"> = {
                createdAt: `${new Date().toISOString()}`,
                companyName: values.companyName,
                collaboratorsCount: values.collaboratorsCount,
                isActive: values.isActive,
                lastSubmit: values.lastSubmit,
              };

              const response = await fetch(
                `${import.meta.env.VITE_EXTERNAL_COMPANIES_API_URL}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(externalCompanyData),
                }
              );

              if (!response.ok) {
                externalCompanyNotRegistered();

                return;
              }

              externalCompanyRegisteredSuccessfully();

              resetForm();

              navigate("/");
            } catch {
              externalCompanyNotRegistered();
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
                      value={values.companyName}
                      isInvalid={!!errors.companyName}
                      onChange={handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.companyName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="inputCollaboratorsCount"
                  >
                    <Form.Label>Número de Colaboradores</Form.Label>

                    <Form.Control
                      type="number"
                      name="collaboratorsCount"
                      min={0}
                      value={values.collaboratorsCount}
                      isInvalid={!!errors.collaboratorsCount}
                      onChange={handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.collaboratorsCount}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="align-items-center">
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="inputLastSubmit">
                    <Form.Label>Última Submissão</Form.Label>

                    <Form.Control
                      type="date"
                      name="lastSubmit"
                      value={values.lastSubmit}
                      isInvalid={!!errors.lastSubmit}
                      onChange={handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.lastSubmit}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group
                    className="mb-3 mb-md-0"
                    controlId="inputIsActive"
                  >
                    <Form.Check
                      type="checkbox"
                      id="checkboxIsActive"
                      name="checkboxIsActive"
                      label="Ativa"
                      isInvalid={!!errors.isActive}
                      onChange={handleChange}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.isActive}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Stack direction="horizontal" className="justify-content-end">
                <Button variant="success" type="submit">
                  Cadastrar nova empresa externa
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
