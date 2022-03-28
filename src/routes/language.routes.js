import { Router } from "express";
import { methods as languageController } from '../controllers/language.controller'

const router = Router();

// Rutas de peticiones

// GET ---------------------------------------------
router.get("/", languageController.getLanguages);

// GET POR ID ---------------------------------------------
router.get("/:id", languageController.getLanguage_id);

// POST ---------------------------------------------
router.post("/", languageController.addLanguage);

// GET POR ID ---------------------------------------------
router.delete("/:id", languageController.delLanguages);

// PUT ---------------------------------------------
router.put("/:id", languageController.updateLanguage);


export default router;