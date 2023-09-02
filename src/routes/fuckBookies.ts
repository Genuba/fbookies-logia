import express from "express";
import { getAllBets } from "../controller/fuckBookiesController";

const router = express.Router();

router.get("/", getAllBets);

export default router;
