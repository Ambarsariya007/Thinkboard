import express from 'express';
import { getallnotes, createnote, deletenote, updatenote, getnotebyid } from '../controllers/notesControllers.js';
const router = express.Router();

router.get("/", getallnotes);
router.get("/:id", getnotebyid);
router.post("/", createnote);
router.delete("/:id", deletenote);
router.put("/:id", updatenote);

export default router;
