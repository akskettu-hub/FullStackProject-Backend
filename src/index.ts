import express from "express";
import mockRouter from "./routes/mock.ts";
import { env } from "./utils/config.ts";
import { connectToDatabase } from "./utils/db.ts";

const app = express();

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/mock", mockRouter);

//const PORT = 3003;
const start = async (): Promise<void> => {
  console.log(env.DATABASE_URL);
  await connectToDatabase();

  app.listen(env.PORT, () => {
    console.log(`server listening on port ${env.PORT}`);
  });
};

await start();
