const app = require("./app");
const { prod_port, dev_port, environment } = require("./config");
const handleError = require("./helpers/handleError");

const startApp = (environment) => {
  environment === "development"
    ? app.listen(dev_port, () => {
        console.log(`Server is running on: http://localhost:${dev_port}`);
      })
    : app.listen(prod_port, () => {
        console.log(`Server is running on: http://localhost:${prod_port}`);
      });
};

try {
  startApp(environment);
} catch (error) {
  handleError(error);
}
