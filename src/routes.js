import { Router } from "express";
import PedidoController from "./app/controllers/PedidoController.js";
import SaborController from "./app/controllers/SaborController.js";
import TamanhoController from "./app/controllers/TamanhoController.js";

const router = Router();

router.get("/pedidos", PedidoController.index);
router.get("/pedidos/:id", PedidoController.show);
router.post("/pedidos", PedidoController.store);
router.put("/pedidos/:id", PedidoController.update);
router.delete("/pedidos/:id", PedidoController.delete);

router.get("/sabores", SaborController.index);

router.get("/tamanhos", TamanhoController.index);

export default router;
