import { connectToDatabase } from "./db/database.service";
import createServer from "./utils/server";

const PORT = 5000;

const app = createServer();

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
