import express from "express";
import people from "./peopleRoutes.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome!");
  });

  app.use(express.json(), people);
};

export default routes;
