import connection from "./db/config";

import { initTeam, initFuckBookies } from "./db/init";
import { FuckBookies } from "./models/fuckBookies";
import { Team } from "./models/team";
import createServer from "./utils/server";

const PORT = 5000;

const app = createServer();

connection
  .sync({ force: true })
  .then(async () => {
    console.log("Database synced successfully");
    initTeam.map(async (x) => await Team.create(x));
    initFuckBookies.map(async (x) => await FuckBookies.create(x));
    console.log("Init data synced successfully");
  })
  .catch((err) => {
    console.log("Err", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
