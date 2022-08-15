const person = require("./personRoutes");
const level = require("./levelRoutes");
const schoolClass = require("./schoolClassRoutes");
const { environment } = require("../config");
const endpointsUrl =
  "https://github.com/Paulo-Felipe-96/english_scool/blob/feat/nexstep-sequelize/English%20Scool.postman_collection.json";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({
      message: "Seja bem-vinde!",
      info: `Veja os endpoints aqui: ${endpointsUrl}`,
    });
  });

  app.get("/status", (req, res) => {
    try {
      res.status(200).json({ status_code: 200, ambiente: environment });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

  app.use(person, level, schoolClass);
};

module.exports = routes;
