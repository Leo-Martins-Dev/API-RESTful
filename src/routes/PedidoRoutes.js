import { Router } from "express";
import PedidoController from "../app/controllers/PedidoController.js";

const router = Router();

router.get("/pedidos", PedidoController.index);
router.get("/pedidos/:id", PedidoController.show);
router.post("/pedidos", PedidoController.store);
router.put("/pedidos/:id", PedidoController.update);
router.delete("/pedidos/:id", PedidoController.delete);

export default router;
