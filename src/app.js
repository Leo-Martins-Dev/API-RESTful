import express from "express";
import PedidoController from "./app/controllers/PedidoController.js";
import SaborController from "./app/controllers/SaborController.js";
import TamanhoController from "./app/controllers/TamanhoController.js";
const app = express();

app.use(express.json());

app.get("/pedidos", PedidoController.index);
app.get("/pedidos/:id", PedidoController.show);
app.post("/pedidos", PedidoController.store);
app.put("/pedidos/:id", PedidoController.update);
app.delete("/pedidos/:id", PedidoController.delete);

app.get("/sabores", SaborController.index);

app.get("/tamanhos", TamanhoController.index);

export default app;
