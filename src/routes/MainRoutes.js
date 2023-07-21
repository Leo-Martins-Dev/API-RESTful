import { Router } from "express";
import PedidoRoutes from "./PedidoRoutes.js";
import SaborRoutes from "./SaborRoutes.js";
import TamanhoRoutes from "./TamanhoRoutes.js";

const router = Router();

router.use(PedidoRoutes);
router.use(SaborRoutes);
router.use(TamanhoRoutes);

export default router;
