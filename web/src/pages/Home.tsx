import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { PartnersProps } from "../schemas/PartnersProps";
import { ExternalCompanieProps } from "../schemas/ExternalCompanieProps";

export function Home() {
  const [partners, setPartners] = useState(Array<PartnersProps>);
  const [externalCompanies, setExternalCompanies] = useState(
    Array<ExternalCompanieProps>
  );

  function partnersLoadedError() {
    return toast(`Erro ao carregar os Parceiros!`, {
      type: "error",
    });
  }

  function externalCompaniesLoadedError() {
    return toast(`Erro ao carregar as Empresas Externas!`, {
      type: "error",
    });
  }

  async function fetchPartners() {
    try {
      const response = await fetch(`${import.meta.env.VITE_PARTNERS_API_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const partners: Array<PartnersProps> = await response.json();

      setPartners(partners);
    } catch {
      partnersLoadedError();
    }
  }

  async function fetchExternalCompanies() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_EXTERNAL_COMPANIES_API_URL}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const externalCompanies: Array<ExternalCompanieProps> =
        await response.json();

      setExternalCompanies(externalCompanies);
    } catch {
      externalCompaniesLoadedError();
    }
  }

  useEffect(() => {
    fetchPartners();

    fetchExternalCompanies();
  }, []);

  return (
    <>
      <Header />

      <Container className="py-4">
        <Row>
          <Col lg={6} className="mb-3">
            <Link to={"#"} className="btn btn-primary mb-4">
              Cadastrar Parceiro
            </Link>

            <h1 className="h2 mb-3">Parceiros</h1>

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

          <Col lg={6}>
            <Link to={"#"} className="btn btn-primary mb-4">
              Cadastrar Empresa Externa
            </Link>

            <h1 className="h2 mb-3">Empresas Externas</h1>

            <Table striped bordered hover responsive className="align-middle">
              <thead>
                <tr>
                  <th>Nome</th>

                  <th>Número Colaboradores</th>

                  <th>Ativa</th>

                  <th></th>

                  <th></th>
                </tr>
              </thead>

              <tbody>
                {externalCompanies.map((externalCompanie) => (
                  <tr key={externalCompanie.id}>
                    <td>{externalCompanie.companyName}</td>

                    <td>{externalCompanie.collaboratorsCount}</td>

                    <td>{externalCompanie.isActive ? "Sim" : "Não"}</td>

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
        </Row>
      </Container>
    </>
  );
}
