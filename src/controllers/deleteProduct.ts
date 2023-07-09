import { Request, Response } from "express";
import {
  ProductWithBook,
  ProductWithDVD,
  ProductWithFurniture,
} from "../model/productModel";

export const deleteProducts = async (req: Request, res: Response) => {
  const { body } = req;
  const { ids } = body;

  let shouldBreak = false;

  for (const id of ids) {
    const productDVD = await ProductWithDVD.findOne({ id });
    if (productDVD) {
      await productDVD.deleteOne();
    } else {
      const productBook = await ProductWithBook.findOne({ id });
      console.log(productBook, 'book');
      if (productBook) {
        await productBook.deleteOne();
      } else {
        const productFurniture = await ProductWithFurniture.findOne({ id });
        if (productFurniture) {
          await productFurniture.deleteOne();
        } else {
          shouldBreak = true;
        }
      }
    }

    if (shouldBreak) {
      return res.status(404).json(`ID:${id} is not found`);
    }


  }

  return res.status(200).json("Successfully deleted");
};
