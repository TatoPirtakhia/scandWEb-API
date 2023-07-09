
import express from "express";
import { NewProductBook, NewProductDVD, NewProductFurinure } from "../controllers/newProduct";
import { GetProducts } from "../controllers/getAllProducts";
import { deleteProducts } from "../controllers/deleteProduct";
const Route = express.Router();

Route.post("/product/DVD", NewProductDVD);
Route.post("/product/Book", NewProductBook);
Route.post("/product/furniture", NewProductFurinure);
Route.get("/getProducts", GetProducts);
Route.delete("/deleteProduct", deleteProducts);

export default Route