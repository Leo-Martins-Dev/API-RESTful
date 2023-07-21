import conexao, { consulta } from "../database/conexao.js";

class PedidosRepository {
  create(pedido) {
    const sql = "INSERT INTO pedidos SET ?";
    return consulta(sql, "Nao foi possivel cadastrar", pedido);
  }

  findAll() {
    const sql = "SELECT * FROM pedidos;";
    return consulta(sql, "Nao foi possivel localizar");
  }

  findById(id) {
    const sql = "SELECT * FROM pedidos WHERE id=?;";
    return consulta(sql, "Nao foi possivel localizar", id);
  }

  update(pedido, id) {
    const sql = "UPDATE pedidos SET ? WHERE id=?";
    return consulta(sql, "Nao foi possivel atualizar o pedido", [pedido, id]);
  }

  delete(id) {
    const sql = "DELETE FROM pedidos WHERE id=?;";
    return consulta(sql, "Nao foi possivel apagar", id);
  }
}

export default new PedidosRepository();
