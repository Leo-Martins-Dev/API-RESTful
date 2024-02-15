# API Restful de Pizzaria 🍕

Esta é uma API Restful de uma pizzaria desenvolvida em Node.js, utilizando o banco de dados MySQL para armazenar dados persistentes. A API permite realizar operações CRUD (Create, Read, Update, Delete) relacionadas a pedidos, sabores e tamanhos de pizza.

## Índice
- [Funcionalidades](#funcionalidades)
- [Banco de Dados MySQL](#banco-de-dados-mysql)
- [Padrão de Arquitetura - MVC (Model-View-Controller)](#padrão-de-arquitetura---mvc-model-view-controller)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades

A API oferece os seguintes endpoints para realizar as operações:

### Pedidos

- `GET /pedidos`: Retorna a lista de todos os pedidos cadastrados.
- `GET /pedidos/:id`: Retorna os detalhes de um pedido específico com base no ID fornecido.
- `POST /pedidos`: Cria um novo pedido com base nos dados fornecidos.
- `PUT /pedidos/:id`: Atualiza um pedido existente com base no ID fornecido e nos dados fornecidos.
- `DELETE /pedidos/:id`: Exclui um pedido existente com base no ID fornecido.

### Sabores

- `GET /sabores`: Retorna a lista de todos os sabores de pizza disponíveis.
- `GET /sabores/:id`: Retorna os detalhes de um sabor específico com base no ID fornecido.
- `POST /sabores`: Adiciona um novo sabor de pizza com base nos dados fornecidos.
- `DELETE /sabores/:id`: Exclui um sabor de pizza existente com base no ID fornecido.

### Tamanhos

- `GET /tamanhos`: Retorna a lista de todos os tamanhos de pizza disponíveis.

## Banco de Dados MySQL

O projeto utiliza o banco de dados MySQL para armazenar os dados de pedidos, sabores e tamanhos de pizza de forma persistente. A conexão com o banco de dados é realizada através da biblioteca `mysql`, e as operações de CRUD são feitas utilizando consultas SQL.

## Padrão de Arquitetura - MVC (Model-View-Controller)

O projeto segue o padrão de arquitetura MVC (Model-View-Controller), que organiza o código em três componentes principais:

- **Model (Modelo)**: Responsável pela representação dos dados e lógica de negócios do aplicativo. Ele interage diretamente com o banco de dados e define as operações de leitura, escrita, atualização e exclusão dos dados relacionados aos pedidos, sabores e tamanhos de pizza.

- **View (Visualização)**: Responsável pela apresentação dos dados ao usuário e interface gráfica. No contexto desta API Restful, a visualização se dá através dos dados retornados em formato JSON, que podem ser consumidos por aplicativos cliente ou outras APIs.

- **Controller (Controlador)**: Atua como intermediário entre o modelo e a visão. Ele recebe as solicitações dos clientes (por exemplo, requisições HTTP) e direciona o fluxo de dados apropriado entre o modelo e a visão. Os controladores são responsáveis por receber as requisições HTTP para os endpoints de pedidos, sabores e tamanhos, processar os dados e retornar as respostas adequadas aos clientes.

O padrão MVC é amplamente utilizado em desenvolvimento web e aplicativos, pois ajuda a separar as preocupações e torna o código mais modular, fácil de manter e testar.

## Contribuição

Este projeto é de código aberto e contribuições são bem-vindas! Se você encontrar bugs, tiver ideias para melhorias ou desejar adicionar novas funcionalidades, sinta-se à vontade para criar um fork, fazer suas alterações e enviar um pull request. Sua contribuição ajudará a tornar a API ainda melhor e mais útil para a comunidade.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para usá-lo e modificá-lo de acordo com suas necessidades.
