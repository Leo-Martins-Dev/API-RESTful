import express from "express";
import { sabores, tamanhos, pedidos } from "./dados.js";
import {
  buscarSaborPorId,
  buscarTamanhoPorId,
  buscarIndexPedido,
  mapearPedidosComNomes,
} from "./funcoesAuxiliares.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Index");
});

app.get("/sabores", (req, res) => {
  res.status(200).send(sabores);
});

app.get("/tamanhos", (req, res) => {
  res.status(200).send(tamanhos);
});

app.get("/pedidos", (req, res) => {
  res.status(200).send(mapearPedidosComNomes(pedidos));
});

app.get("/pedidos/:id", (req, res) => {
  const pedido = mapearPedidosComNomes(pedidos).find(
    (pedido) => pedido.id == req.params.id
  );
  res.json(pedido);
});

app.post("/pedidos", (req, res) => {
  if (!req.body.saborId || !req.body.tamanhoId) {
    res.status(400).send("Os campos saborId e tamanhoId são obrigatórios");
    return;
  }
  const novoPedido = {
    id: pedidos.length + 1,
    saborId: req.body.saborId,
    tamanhoId: req.body.tamanhoId,
  };
  pedidos.push(novoPedido);
  res.status(201).send(novoPedido);
});

app.delete("/pedidos/:id", (req, res) => {
  let index = buscarIndexPedido(req.params.id);
  pedidos.splice(index, 1);
  res.send("Pedido excluido com sucesso!");
});

app.put("/pedidos/:id", (req, res) => {
  let index = buscarIndexPedido(req.params.id);
  pedidos[index].saborId = req.body.saborId;
  pedidos[index].tamanhoId = req.body.tamanhoId;
  res.send(
    `Seu pedido foi alterado para sabor: ${buscarSaborPorId(
      req.body.saborId
    )} e tamanho: ${buscarTamanhoPorId(req.body.tamanhoId)}`
  );
});

export default app;
