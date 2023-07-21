import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "db-pizzaria",
});

conexao.connect();

export const consulta = (sql, messageReject, value = "") => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, value, (error, result) => {
      if (error) return reject(messageReject);
      const rows = JSON.parse(JSON.stringify(result));
      return resolve(rows);
    });
  });
};

export default conexao;
