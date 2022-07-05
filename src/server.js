const app = require("./app/app");
const { port } = require("./config");
const handleError = require("./helpers/handleError");

try {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
} catch (error) {
  handleError(error);
}
