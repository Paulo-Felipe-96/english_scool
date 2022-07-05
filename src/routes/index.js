const person = require("./personRoutes");
const express = require("express");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome!");
  });

  app.use(express.json(), person);
};

module.exports = routes;
