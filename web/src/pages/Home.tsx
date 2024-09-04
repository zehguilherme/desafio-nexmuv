import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { PartnersProps } from "../schemas/PartnersProps";

export function Home() {
  const [partners, setPartners] = useState(Array<PartnersProps>);

  async function fetchPartners() {
    try {
      const response = await fetch(
        `https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const partners = await response.json();

      setPartners(partners);
    } catch (error) {}
  }

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <>
      <Header />

      <Container className="py-4">
        <Row>
          <Col>
            <Link to={"#"} className="btn btn-primary mb-3">
              Cadastrar Parceiro
            </Link>

            <Table striped bordered hover responsive className="align-middle">
              <thead>
                <tr>
                  <th>Nome</th>

                  <th>Descrição</th>

                  <th>Repositório Git</th>

                  <th></th>

                  <th></th>
                </tr>
              </thead>

              <tbody>
                {partners.map((partner) => (
                  <tr key={partner.id}>
                    <td>{partner.name}</td>

                    <td>{partner.description}</td>

                    <td>{partner.repositoryGit}</td>

                    <td>
                      <Button variant="secondary" type="button">
                        Editar
                      </Button>
                    </td>

                    <td>
                      <Button variant="danger" type="button">
                        Excluir
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
