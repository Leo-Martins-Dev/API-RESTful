import PedidosRepository from "../repositories/PedidosRepository.js";

class PedidoController {
  async index(req, res) {
    const row = await PedidosRepository.findAll();
    res.json(row);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await PedidosRepository.findById(id);
    res.json(row);
  }

  async store(req, res) {
    const pedido = req.body;
    const row = await PedidosRepository.create(pedido);
    res.json(row);
  }

  async update(req, res) {
    const id = req.params.id;
    const pedido = req.body;
    const row = await PedidosRepository.update(pedido, id);
    res.json(row);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await PedidosRepository.delete(id);
    res.json(row);
  }
}

export default new PedidoController();
