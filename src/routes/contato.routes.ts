import { Router } from "express";
import * as controller from "../controllers/contato.controller";
import { validateCreateContato } from "../middlewares/validation.middleware";

const router = Router();

router.post("/contatos", validateCreateContato, controller.create);

export default router;
