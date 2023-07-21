import BaseRepository from "../repositories/BaseRepository.js";

const saboresRepository = new BaseRepository("sabores");

class SaborController {
  async index(req, res) {
    const row = await saboresRepository.findAll();
    res.json(row);
  }

  async show(req, res) {
    const id = req.params.id;
    const row = await saboresRepository.findById(id);
    res.json(row);
  }

  async store(req, res) {
    const pedido = req.body;
    const row = await saboresRepository.create(pedido);
    res.json(row);
  }

  async delete(req, res) {
    const id = req.params.id;
    const row = await saboresRepository.delete(id);
    res.json(row);
  }
}

export default new SaborController();
