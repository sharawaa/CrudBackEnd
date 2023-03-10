import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import Router from "./routes/product.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.use(Router);

app.listen(port, () => {
  console.log(`start ${port}`);
});
