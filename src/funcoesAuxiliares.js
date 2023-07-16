// funcoesAuxiliares.js
import { sabores, tamanhos, pedidos } from "./dados.js";

export function buscarSaborPorId(id) {
  const sabor = sabores.find((sabor) => sabor.id == id);
  return sabor ? sabor.nome : null;
}

export function buscarTamanhoPorId(id) {
  const tamanho = tamanhos.find((tamanho) => tamanho.id == id);
  return tamanho ? tamanho.nome : null;
}

export function buscarIndexPedido(id) {
  return pedidos.findIndex((pedido) => pedido.id == id);
}

export function mapearPedidosComNomes(pedidos) {
  return pedidos.map((pedido) => ({
    id: pedido.id,
    sabor: buscarSaborPorId(pedido.saborId),
    tamanho: buscarTamanhoPorId(pedido.tamanhoId),
  }));
}
