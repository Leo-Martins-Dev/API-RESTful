import { consulta } from "../database/conexao.js";

class BaseRepository {
  constructor(tableName) {
    this.tableName = tableName;
  }

  create(data) {
    const sql = `INSERT INTO ${this.tableName} SET ?`;
    return consulta(sql, "Nao foi possivel cadastrar", data);
  }

  findAll() {
    const sql = `SELECT * FROM ${this.tableName};`;
    return consulta(sql, "Nao foi possivel localizar");
  }

  findById(id) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id=?;`;
    return consulta(sql, "Nao foi possivel localizar", id);
  }

  update(data, id) {
    const sql = `UPDATE ${this.tableName} SET ? WHERE id=?`;
    return consulta(sql, "Nao foi possivel atualizar", [data, id]);
  }

  delete(id) {
    const sql = `DELETE FROM ${this.tableName} WHERE id=?;`;
    return consulta(sql, "Nao foi possivel apagar", id);
  }
}

export default BaseRepository;
