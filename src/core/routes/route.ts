import { Router } from "express";
import { mailController } from "../controller";
const route = Router();
route.post("/", mailController);
export default route;
