import { Router } from "express";
import * as controller from "../controllers/contato.controller";
import { validateCreateContato, validateUpdateContato } from "../middlewares/validation.middleware";

const router = Router();

router.get("/contatos", controller.getAll);
router.post("/contatos", validateCreateContato, controller.create);
router.patch("/contatos/:id", validateUpdateContato, controller.update);

export default router;
