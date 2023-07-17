import conexao from "../database/conexao.js";

class PedidoController {
  index(req, res) {
    const sql = "SELECT * FROM pedidos;";
    conexao.query(sql, (error, result) => {
      if (error) {
        console.log(error);
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }
  show(req, res) {
    const id = req.params.id;
    const sql = "SELECT * FROM pedidos WHERE id=?;";
    conexao.query(sql, id, (error, result) => {
      const linha = result[0];
      if (error) {
        console.log(error);
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(linha);
      }
    });
  }
  store(req, res) {
    const pedido = req.body;
    const sql = "INSERT INTO pedidos SET ?";
    conexao.query(sql, pedido, (error, result) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error: error });
      } else {
        res.status(201).json(result);
      }
    });
  }
  update(req, res) {
    const id = req.params.id;
    const pedido = req.body;
    const sql = "UPDATE pedidos SET ? WHERE id=?";
    conexao.query(sql, [pedido, id], (error, result) => {
      if (error) {
        console.log(error);
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }
  delete(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM pedidos WHERE id=?;";
    conexao.query(sql, id, (error, result) => {
      if (error) {
        console.log(error);
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }
}

export default new PedidoController();
