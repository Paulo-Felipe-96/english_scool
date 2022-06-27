import express from "express";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome!");
  });

  app.use(express.json());
};

export default routes;
