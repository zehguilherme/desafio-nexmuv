# Desafio Nexmuv

## 💬 Descrição

O intuito é que possamos cadastrar os parceiros que temos integrados em nossas aplicações, com informações dele, onde usamos e quais clientes atendemos.

## 🚀 Tecnologias

### Front-end

- [ReactJS](https://react.dev/) - Biblioteca para construção de interfaces usando componentes
- [TypeScript](https://www.typescriptlang.org/) - Conjunto de pacotes que adiciona tipagem estática à linguagem JavaScript
- [React Router](https://reactrouter.com/en/main) - Gerenciamento de rotas da aplicação
- [React Bootstrap](https://react-bootstrap.netlify.app)

### Back-end

#### APIs

- [Parceiros](https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners)
- [Empresas externas](https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies)

---

- Listar tudo - `GET /`
- Listar um por id - `GET /:id`
- Cadastrar um parceiro - `POST - /`
- Atualizar um parceiro - `PUT - /:id`
- Deletar um parceiro - `DELETE - /:id`

## TODO

- [ ] Deverá ser implementado um projeto com micro front-ends separados por domínios ou contextos de uso, permitindo assim, que diferentes times cuidem dessas funcionalidades de forma independente
- [ ] Preparar projeto em contêiner para que o time de infra consiga subir num cloud, exemplo ECS da AWS
- [x] Iniciar com Vite
- [ ] Testes unitários
- [ ] Deploy do projeto no GitHub Pages
- [x] Deploy no Vercel

### Página de Login

- [x] Criação do formulário (Campos **Usuário**, **Senha** e **Continuar Logado**)
- [ ] Manter usuário conectado (Se o checkbox na tela de login for marcado deve salvar o usuário no cookie, se não, deve salvar no local storage)
- [ ] Ao entrar na página, realizar a  busca do cookie contendo o nome do usuário
- [ ] Ao clicar em entrar não precisa autenticar, só redirecionar para a página inicial

### Página Inicial

Layout da aplicação com um menu e os itens.

- [ ] Cadastrar parceiro
- [ ] Listar todos os parceiros (Tabela com paginação e na última coluna ações para editar/deletar cada registro)
- [ ] Sobre a aplicação (Página com um texto falando como o projeto foi feito, sentimento, tecnologia usada, para que serve o sistema, etc)
- [ ] Sair (Direciona para a página de **Login**)
- [ ] Cadastrar empresa externa
- [ ] Listar as empresas externas (Tabela com paginação do lado do front e na última coluna ações para editar/deletar cada registro)
- [ ] Compartilhar dados da tabela (Em relação a paginação, deve existir um mecanismo que ao compartilhar o link com outra pessoa, a pessoa deve ser redirecionada para a página específica da tabela. Exemplo: se ao compartilhar o link a paginação avançou até a página 3, ao entrar no link deve estar na página 3. Caso o usuário esteja logado, caso não, após o login ele deve ser redirecionado.)

## 🚀 Começando

Primeiro de tudo você precisa ter `node` e `npm` (ou `yarn`) instalados em sua máquina.

*Se você decidir usar o yarn não se esqueça de deletar `package-lock.json` nas pastas.*

Então você pode clonar o repositório.

```code
  git clone https://github.com/zehguilherme/desafio-nexmuv
```

Inicie a aplicação

1. `cd web`
2. `npm install` ou `yarn`
3. `npm run dev` ou `yarn dev`