import { Request, Response } from "express";



import {productTypeSchemaBook, productTypeSchemaDVD, productTypeSchemaFurniture,} from "../schema/productSchema";
import { ProductWithBook, ProductWithDVD, ProductWithFurniture } from "../model/productModel";

export const NewProductDVD = async (req: Request, res: Response) => {
  const { body } = req;

  const validator = await productTypeSchemaDVD()

  const { value, error } = validator.validate(body);
  if (error) {
    return res.status(422).json(error.details);
  }
  const {
    id,
    name,
    price,
    DVD
  } = value;
  const product = await ProductWithDVD.findOne({
    id,
  });
  if (product) {
    return res.status(302).json("this id is used");
  }

  await ProductWithDVD.create({
    id,
    name,
    price,
    DVD
  })

  return res.status(201).json("Product created successfully");

};
export const NewProductBook = async (req: Request, res: Response) => {
  const { body } = req;

  const validator = await productTypeSchemaBook()

  const { value, error } = validator.validate(body);
  if (error) {
    return res.status(422).json(error.details);
  }
  const {
    id,
    name,
    price,
    Book
  } = value;
  const invoice = await ProductWithBook.findOne({
    id,
  });
  if (invoice) {
    return res.status(302).json("this id is used");
  }

  await ProductWithBook.create({
    id,
    name,
    price,
    Book
  })

  return res.status(201).json("Product created successfully");

};
export const NewProductFurinure = async (req: Request, res: Response) => {
  const { body } = req;

  const validator = await productTypeSchemaFurniture()

  const { value, error } = validator.validate(body);
  if (error) {
    return res.status(422).json(error.details);
  }
  const {
    id,
    name,
    price,
    Furniture
  } = value;
  const invoice = await ProductWithFurniture.findOne({
    id,
  });
  if (invoice) {
    return res.status(302).json("this id is used");
  }

  await ProductWithFurniture.create({
    id,
    name,
    price,
    Furniture
  })

  return res.status(201).json("Product created successfully");

};