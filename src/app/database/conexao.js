import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql";

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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
