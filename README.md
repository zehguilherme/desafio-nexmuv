# Desafio Teddy Open Finance

## 💬 Descrição

O intuito deste projeto é que a Teddy possa cadastrar os parceiros que temos integrados em nossas aplicações, com informações deles, onde usamos e quais clientes atendemos.

## 🚀 Tecnologias

### Front-end

- [ReactJS](https://react.dev/) - Biblioteca para construção de interfaces usando componentes
- [TypeScript](https://www.typescriptlang.org/) - Conjunto de pacotes que adiciona tipagem estática à linguagem JavaScript
- [React Router](https://reactrouter.com/en/main) - Gerenciamento de rotas da aplicação
- [React Bootstrap](https://react-bootstrap.netlify.app) - Framework CSS para estilização
- [React-Toastify](https://www.npmjs.com/package/react-toastify) - Componente de exibição de notificações
- [Formik](https://formik.org/) - Biblioteca de gerenciamento de formulários
- [Yup](https://github.com/jquense/yup) - Biblioteca para validação de esquemas e dados

### Back-end

#### APIs

- [Parceiros](https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners)
- [Empresas externas](https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies)

##### Métodos

- Listar tudo - `GET /`
- Listar um por id - `GET /:id`
- Cadastrar um parceiro / empresa externa - `POST - /`
- Atualizar um parceiro / empresa externa - `PUT - /:id`
- Deletar um parceiro / empresa externa - `DELETE - /:id`

## ✅ TODO / TASKS

- [ ] Deverá ser implementado um projeto com micro front-ends separados por domínios ou contextos de uso, permitindo assim, que diferentes times cuidem dessas funcionalidades de forma independente. (8h)
- [ ] Preparar projeto em contêiner para que o time de infra consiga subir num cloud, exemplo ECS da AWS. (8h)
- [x] Iniciar projeto com Vite

### Testes automatizados

- [ ] Testes unitários (24h)

### Deploy

- [x] Deploy do projeto na Vercel
- [ ] Deploy do projeto no GitHub Pages

### Página de Login

- [x] Criação do formulário (Campos: **Usuário**, **Senha** e **Continuar Logado**)
- [ ] Manter usuário conectado (Se o checkbox na tela de login for marcado deve salvar o usuário no cookie, se não, deve salvar no local storage). (8h)
- [ ] Ao entrar na página, realizar a  busca do cookie contendo o nome do usuário. (4h)
- [x] Ao clicar em entrar não precisa autenticar, só redirecionar para a página inicial (Home)

### Página Inicial (Home)

Layout da aplicação com um menu e os itens.

#### Menu de Navegação

- [x] Sobre a aplicação (Página com um texto falando como o projeto foi feito, sentimento, tecnologia usada, para que serve o sistema, etc)
- [x] Sair (Direciona para a página de **Login**)

#### Parceiro

- [x] Listar todos os itens
- [x] Cadastrar um item
- [x] Editar um item
- [x] Deletar um item
- [x] Adicionar spinner de carregamento das informações da tabela
- [ ] Adicionar paginação na tabela. (8h)
- [ ] Compartilhar dados da tabela (Em relação a paginação, deve existir um mecanismo que ao compartilhar o link com outra pessoa, a pessoa deve ser redirecionada para a página específica da tabela. Exemplo: se ao compartilhar o link a paginação avançou até a página 3, ao entrar no link deve estar na página 3. Caso o usuário esteja logado, caso não, após o login ele deve ser redirecionado). (8h)

#### Empresa Externa

- [x] Listar todos os itens
- [x] Cadastrar um item
- [x] Editar um item
- [x] Deletar um item
- [x] Adicionar spinner de carregamento das informações da tabela
- [ ] Adicionar paginação na tabela. (8h)
- [ ] Compartilhar dados da tabela (Em relação a paginação, deve existir um mecanismo que ao compartilhar o link com outra pessoa, a pessoa deve ser redirecionada para a página específica da tabela. Exemplo: se ao compartilhar o link a paginação avançou até a página 3, ao entrar no link deve estar na página 3. Caso o usuário esteja logado, caso não, após o login ele deve ser redirecionado). (8h)

## 🚀 Começando

### Iniciar o projeto localmente

Primeiro de tudo você precisa ter `node` e `npm` (ou `yarn`) instalados em sua máquina.

- [Download](https://nodejs.org/en/download/package-manager) do `node` e `npm`.
- [Download](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) do `yarn`.

*Se você decidir usar o yarn não se esqueça de deletar `package-lock.json` nas pastas.*

Então você pode clonar o repositório.

```code
  git clone https://github.com/zehguilherme/desafio-teddy
```

Inicie a aplicação

1. `cd web`
2. `npm install` ou `yarn`
3. `npm run dev` ou `yarn dev`

### Abrir o projeto em produção

Basta acessar esse [link](https://desafio-teddy.vercel.app/).
