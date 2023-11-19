import createServer from "./utils/server";

const PORT = 5000;

const app = createServer();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
