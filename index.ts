import express from "express";

const x: number = 1;
console.log(x);

const app = express();

const foo = (x: number): number => {
  return x * x;
};

console.log(foo(x));

app.get("/ping", (_req, res) => {
  res.send("pong");
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
