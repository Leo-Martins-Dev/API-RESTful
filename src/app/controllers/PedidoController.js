import BaseRepository from "../repositories/BaseRepository.js";

const pedidosRepository = new BaseRepository("pedidos");

class PedidoController {
  async index(req, res) {
    const row = await pedidosRepository.findAll();
    res.json(row);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await pedidosRepository.findById(id);
    res.json(row);
  }

  async store(req, res) {
    const pedido = req.body;
    const row = await pedidosRepository.create(pedido);
    res.json(row);
  }

  async update(req, res) {
    const id = req.params.id;
    const pedido = req.body;
    const row = await pedidosRepository.update(pedido, id);
    res.json(row);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await pedidosRepository.delete(id);
    res.json(row);
  }
}

export default new PedidoController();
