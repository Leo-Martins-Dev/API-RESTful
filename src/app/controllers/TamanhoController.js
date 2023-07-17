import conexao from "../database/conexao.js";

class TamanhoController {
  index(req, res) {
    const sql = "SELECT * FROM tamanhos;";
    conexao.query(sql, (error, result) => {
      if (error) {
        console.log(error);
        res.status(404).json({ error: error });
      } else {
        res.status(200).json(result);
      }
    });
  }
}

export default new TamanhoController();
