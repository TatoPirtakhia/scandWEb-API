import { Request, Response } from "express";
import {
  ProductWithBook,
  ProductWithDVD,
  ProductWithFurniture,
} from "../model/productModel";
export const GetProducts = async (_req: Request, res: Response) => {
  const dataDVD = await ProductWithDVD.find();
  const newDataDVD = dataDVD.map((data) => {
    return {
      id: data.id,
      name: data.name,
      price: data.price,
      DVD: data.DVD,
    };
  });

  const dataBook = await ProductWithBook.find();
  const newDataBook = dataBook.map((data) => {
    return {
      id: data.id,
      name: data.name,
      price: data.price,
      Book: data.Book,
    };
  });

  const dataFurniture = await ProductWithFurniture.find();
  const newDataFurniture = dataFurniture.map((data) => {
    return {
      id: data.id,
      name: data.name,
      price: data.price,
      Furniture: data.Furniture,
    };
  });
  const newData = [...newDataDVD, ...newDataBook, ...newDataFurniture];

  return res.status(201).json(newData);
};
