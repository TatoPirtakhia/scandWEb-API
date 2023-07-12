import { Request, Response } from "express";
import {
  ProductWithBook,
  ProductWithDVD,
  ProductWithFurniture,
} from "../model/productModel";

export const deleteProducts = async (req: Request, res: Response) => {
  const { body } = req;
  const deletedProducts = [];

  try {
    for (const id of body) {
      let product = await ProductWithDVD.findOneAndDelete({ id });
      if (!product) {
        product = await ProductWithBook.findOneAndDelete({ id });
      }
      if (!product) {
        product = await ProductWithFurniture.findOneAndDelete({ id });
      }
      if (!product) {
        return res.status(404).json(`ID:${id} is not found`);
      }
      deletedProducts.push(product);
    }

    if (deletedProducts.length > 0) {
      return res.status(200).json({
        message: "Successfully deleted",
        deletedProducts,
      });
    } else {
      return res.status(404).json("No products found for deletion");
    }
  } catch (error) {
    return res.status(500).json("Error occurred while deleting products");
  }
};
