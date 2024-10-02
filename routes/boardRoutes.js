import express from "express";
import controller from "../controllers/boardController.js";

const router = express.Router();

router.get("/", controller.getMessages);
router.get("/new", controller.getNewMessageForm);
router.post("/new", controller.addMessage);

export default router;
