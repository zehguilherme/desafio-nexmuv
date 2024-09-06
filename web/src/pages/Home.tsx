import {
  Badge,
  Button,
  Container,
  Spinner,
  Stack,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { PartnerProps } from "../schemas/PartnerProps";
import { ExternalCompanyProps } from "../schemas/ExternalCompanyProps";

export function Home() {
  const [partners, setPartners] = useState(Array<PartnerProps>);
  const [externalCompanies, setExternalCompanies] = useState(
    Array<ExternalCompanyProps>
  );
  const [isLoadingPartners, setIsLoadingPartners] = useState(true);
  const [isLoadingExternalCompanies, setIsLoadingExternalCompanies] =
    useState(true);

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

  function partnerDeletedSuccessfully(partnerName: string) {
    return toast(`Parceiro "${partnerName}" excluído com sucesso!`, {
      type: "success",
    });
  }

  function partnerNotDeleted(partnerName: string) {
    return toast(`Erro ao excluir o parceiro "${partnerName}"!`, {
      type: "error",
    });
  }

  function externalCompanyDeletedSuccessfully(externalCompanyName: string) {
    return toast(
      `Empresa externa "${externalCompanyName}" excluída com sucesso!`,
      {
        type: "success",
      }
    );
  }

  function externalCompanyNotDeleted(externalCompanyName: string) {
    return toast(
      `Erro ao excluir a empresa externa "${externalCompanyName}"!`,
      {
        type: "error",
      }
    );
  }

  async function fetchPartners() {
    try {
      const response = await fetch(`${import.meta.env.VITE_PARTNERS_API_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const partners: Array<PartnerProps> = await response.json();

      setPartners(partners);

      setIsLoadingPartners(false);
    } catch {
      partnersLoadedError();

      setIsLoadingPartners(false);
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

      const externalCompanies: Array<ExternalCompanyProps> =
        await response.json();

      setExternalCompanies(externalCompanies);

      setIsLoadingExternalCompanies(false);
    } catch {
      externalCompaniesLoadedError();

      setIsLoadingExternalCompanies(false);
    }
  }

  async function fetchPartner(partnerId: string): Promise<string> {
    const response = await fetch(
      `${import.meta.env.VITE_PARTNERS_API_URL}/${partnerId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const partners: PartnerProps = await response.json();

    const { id } = partners;

    return id;
  }

  async function deletePartner(partnerId: string) {
    await fetch(`${import.meta.env.VITE_PARTNERS_API_URL}/${partnerId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async function handleDeletePartner(partnerId: string, partnerName: string) {
    const partnerDeleteIsConfirmed = confirm(
      `Deseja realmente excluir o parceiro "${partnerName}"?`
    );

    try {
      if (partnerDeleteIsConfirmed) {
        const responsePartnerId = await fetchPartner(partnerId);

        await deletePartner(responsePartnerId);

        partnerDeletedSuccessfully(partnerName);

        await fetchPartners();
      }
    } catch {
      partnerNotDeleted(partnerName);
    }
  }

  async function fetchExternalCompany(
    externalCompanyId: string
  ): Promise<string> {
    const response = await fetch(
      `${import.meta.env.VITE_EXTERNAL_COMPANIES_API_URL}/${externalCompanyId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const externalCompany: ExternalCompanyProps = await response.json();

    const { id } = externalCompany;

    return id;
  }

  async function deleteExternalCompany(externalCompanyId: string) {
    await fetch(
      `${import.meta.env.VITE_EXTERNAL_COMPANIES_API_URL}/${externalCompanyId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  async function handleDeleteExternalCompany(
    externalCompanyId: string,
    externalCompanyName: string
  ) {
    const externalCompanyDeleteIsConfirmed = confirm(
      `Deseja realmente excluir a empresa externa "${externalCompanyName}"?`
    );

    try {
      if (externalCompanyDeleteIsConfirmed) {
        const responseExternalCompanyId = await fetchExternalCompany(
          externalCompanyId
        );

        await deleteExternalCompany(responseExternalCompanyId);

        externalCompanyDeletedSuccessfully(externalCompanyName);

        await fetchExternalCompanies();
      }
    } catch {
      externalCompanyNotDeleted(externalCompanyName);
    }
  }

  useEffect(() => {
    fetchPartners();

    fetchExternalCompanies();
  }, []);

  return (
    <>
      <Header />

      <Container as={"main"} className="py-4">
        <h1 className="visually-hidden">Home</h1>

        <Tabs
          defaultActiveKey="partners"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="partners" title="Parceiros">
            <Link to={"/parceiro"} className="btn btn-primary mb-4">
              Cadastrar Parceiro
            </Link>

            <h2 className="mb-3">Parceiros</h2>

            {isLoadingPartners ? (
              <Stack
                direction="horizontal"
                className="justify-content-center align-items-center"
              >
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Stack>
            ) : (
              <Table striped bordered hover responsive className="align-middle">
                <thead>
                  <tr>
                    <th>Nome</th>

                    <th>Descrição</th>

                    <th>Repositório Git</th>

                    <th>URL Documento</th>

                    <th>Clientes</th>

                    <th>Projetos</th>

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

                      <td>{partner.urlDoc}</td>

                      <td>
                        {partner.clients.map((client) => (
                          <Badge
                            key={`${client}-${Math.random()}`}
                            bg="secondary"
                            className="me-1"
                          >
                            {client}
                          </Badge>
                        ))}
                      </td>

                      <td>
                        {partner.projects.map((project) => (
                          <Badge
                            key={`${project}-${Math.random()}`}
                            bg="secondary"
                            className="me-1"
                          >
                            {project}
                          </Badge>
                        ))}
                      </td>

                      <td>
                        <Button variant="secondary" type="button">
                          Editar
                        </Button>
                      </td>

                      <td>
                        <Button
                          variant="danger"
                          type="button"
                          onClick={() =>
                            handleDeletePartner(partner.id, partner.name)
                          }
                        >
                          Excluir
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Tab>

          <Tab eventKey="externalCompanies" title="Empresas Externas">
            <Link to={"/empresa-externa"} className="btn btn-primary mb-4">
              Cadastrar Empresa Externa
            </Link>

            <h2 className="mb-3">Empresas Externas</h2>

            {isLoadingExternalCompanies ? (
              <Stack
                direction="horizontal"
                className="justify-content-center align-items-center"
              >
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Stack>
            ) : (
              <Table striped bordered hover responsive className="align-middle">
                <thead>
                  <tr>
                    <th>Nome</th>

                    <th>Núm. Colaboradores</th>

                    <th>Ativa</th>

                    <th>Última Submissão</th>

                    <th></th>

                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {externalCompanies.map((externalCompany) => (
                    <tr key={externalCompany.id}>
                      <td>{externalCompany.companyName}</td>

                      <td>{externalCompany.collaboratorsCount}</td>

                      <td>{externalCompany.isActive ? "Sim" : "Não"}</td>

                      <td>
                        {new Date(
                          externalCompany.lastSubmit
                        ).toLocaleDateString("pt-BR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </td>

                      <td>
                        <Link
                          className="btn btn-secondary"
                          to={`/empresa-externa/${externalCompany.id}`}
                        >
                          Editar
                        </Link>
                      </td>

                      <td>
                        <Button
                          variant="danger"
                          type="button"
                          onClick={() =>
                            handleDeleteExternalCompany(
                              externalCompany.id,
                              externalCompany.companyName
                            )
                          }
                        >
                          Excluir
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}
