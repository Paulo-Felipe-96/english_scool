import app from "./app/app.js";
import { port } from "./config/index.js";

try {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
} catch (error) {
  handleError(error);
}
