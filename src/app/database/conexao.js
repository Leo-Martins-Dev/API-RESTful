import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "db-pizzaria",
});

conexao.connect();

export default conexao;
