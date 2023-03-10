import express from "express";
const Router = express.Router();
import { getProducts } from "../services/prod-service.js";

Router.get("/products", async (req, res) => {
  const result = await getProducts();
  console.log(result);
  res.status(200).json(result);
});
export default Router;
