import { Container } from "react-bootstrap";

import { Header } from "../components/Header";

export function About() {
  return (
    <>
      <Header />

      <Container as={"main"} className="py-4">
        <h1 className="mb-4">Sobre</h1>

        <section>
          <h2 className="mb-3">Propósito do sistema</h2>

          <p>
            Possibilitar com que sejam cadastrados os parceiros que a Teddy tem
            integrados em suas aplicações, com informações deles, onde são
            usados e quais são clientes atendidos.
          </p>
        </section>

        <section>
          <h2 className="mb-3">Tecnologias</h2>

          <p>
            O projeto foi feito através do uso da biblioteca{" "}
            <a href="https://react.dev/" target="_blank">
              React
            </a>
            , que possibilita com que a interface seja separada em pequenos
            blocos (componentes) para facilitar a manutenção e escalabilidade,
            juntamente da linguagem de programação{" "}
            <a href="https://www.typescriptlang.org/" target="_blank">
              TypeScript
            </a>{" "}
            para melhorar a experiência do desenvolvedor no quesito de evitar
            com que vários erros em tempo de execução vão para o ambiente de
            produção. Para a estilização foi usado a biblioteca{" "}
            <a href="https://react-bootstrap.netlify.app/" target="_blank">
              React Bootstrap
            </a>
            .
          </p>

          <p>
            Para o gerenciamento das rotas foi usado a biblioteca{" "}
            <a href="https://reactrouter.com/en/main" target="_blank">
              React Router
            </a>
            .
          </p>

          <p>
            Para a melhor visualização por parte do usuário dos estados de
            sucesso e erro de operações, foi usada a biblioteca de exibição de
            notificações{" "}
            <a
              href="https://www.npmjs.com/package/react-toastify"
              target="_blank"
            >
              React-Toastify
            </a>
            .
          </p>

          <p>
            Para o gerenciamento dos formulários e o formato das informações
            foram usadas as bibliotecas{" "}
            <a href="https://formik.org/" target="_blank">
              Formik
            </a>{" "}
            e{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            .
          </p>
        </section>
      </Container>
    </>
  );
}
