import { getUserStats } from "./statsFunctions";

const { Router } = require("express");

const router = Router();

router.get("/",getUserStats);



export default router;