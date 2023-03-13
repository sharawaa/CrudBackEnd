import express from "express";
const Router = express.Router();
import { addProduct, getBrands, getProducts } from "../services/prod-service.js";

Router.get("/products", async (req, res) => {
  const result = await getProducts();
  console.log(result);
  res.status(200).json(result);
});
Router.get("/brands", async (req, res)=>{
  const progress = await getBrands();
  console.log(progress);
  res.status(200).json(progress)
})
export default Router;
Router.post("/product", async(req, res)=>{
  const result = await addProduct();
  console.log(req.body)
  console.log(result)
  res.status(200).json(result)
})