import express from "express";
import conexao from "../infra/conexao.js";
const app = express();

app.use(express.json());

app.get("/pedidos", (req, res) => {
  const sql = "SELECT * FROM pedidos;";
  conexao.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/pedidos/:id", (req, res) => {
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
});

app.get("/sabores", (req, res) => {
  const sql = "SELECT * FROM sabores;";
  conexao.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/tamanhos", (req, res) => {
  const sql = "SELECT * FROM tamanhos;";
  conexao.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.status(404).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/pedidos/:id", (req, res) => {
  const pedido = mapearPedidosComNomes(pedidos).find(
    (pedido) => pedido.id == req.params.id
  );
  res.json(pedido);
});

app.post("/pedidos", (req, res) => {
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
});

app.delete("/pedidos/:id", (req, res) => {
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
});

app.put("/pedidos/:id", (req, res) => {
  const id = req.params.id;
  const pedido = req.body;
  const sql = "UPDATE pedidos SET ? WHERE id=?";
  conexao.query(sql, [pedido, id], (error, result) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: error });
    } else {
      res.status(200).json(result);
    }
  });
});

export default app;
