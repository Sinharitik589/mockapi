import { Router } from "express";
import { createNewEndpointData, deleteEndPoint, editEndPoint, getEndPoint, getEndPointData } from "./apiFunctions";
import checkUser from "../middlewares/checkUser";

const router = Router();

router.get("/:id/:endpoint",checkUser,getEndPoint);
router.get("/:id/:endpoint/:_id",getEndPointData);

router.post("/:id/:endpoint",checkUser,createNewEndpointData);

router.put("/:id/:endpoint/:_id",checkUser,editEndPoint);

router.delete("/:id/:endpoint/:_id",checkUser,deleteEndPoint);

module.exports = router;