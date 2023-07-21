import { Router } from "express";
import SaborController from "../app/controllers/SaborController.js";

const router = Router();

router.get("/sabores", SaborController.index);
router.get("/sabores/:id", SaborController.show);
router.post("/sabores", SaborController.store);
router.delete("/sabores/:id", SaborController.delete);

export default router;
