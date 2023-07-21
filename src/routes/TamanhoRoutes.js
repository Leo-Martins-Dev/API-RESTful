import { Router } from "express";
import TamanhoController from "../app/controllers/TamanhoController.js";

const router = Router();

router.get("/tamanhos", TamanhoController.index);

export default router;
