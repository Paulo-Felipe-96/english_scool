import { Router } from "express";
import PeopleController from "../controller/PeopleController.js";

const routes = Router();
const { listAll } = PeopleController;

routes.get("/pessoas", listAll);

export default routes;
