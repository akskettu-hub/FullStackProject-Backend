import express from "express";
import mockRouter from "./routes/mock.ts";

const app = express();

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/mock", mockRouter);

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
