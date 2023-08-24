import { createMongoId, getUserStats } from "./statsFunctions";

const { Router } = require("express");

const router = Router();

router.get("/",getUserStats);
router.get("/userid",createMongoId);


export default router;