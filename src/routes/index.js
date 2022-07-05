const person = require("./personRoutes");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome!");
  });

  app.use(person);
};

module.exports = routes;
