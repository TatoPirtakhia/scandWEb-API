import { Schema, model } from "mongoose";

const productWithDVD = new Schema({
  id: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  price: { type: Schema.Types.Number, required: true },
  DVD: {
    size: { type: Schema.Types.Number, required: true },
  },
});

export const ProductWithDVD = model("ProductWithDVD", productWithDVD);

const productWithBook = new Schema({
  id: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  price: { type: Schema.Types.Number, required: true },
  Book: {
    Weight: { type: Schema.Types.Number, required: true },
  },
});

export const ProductWithBook = model("ProductWithBook", productWithBook);

const productWithFurniture = new Schema({
  id: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  price: { type: Schema.Types.Number, required: true },
  Furniture: {
    Height: { type: Schema.Types.Number, required: true },
    Width: { type: Schema.Types.Number, required: true },
    Length: { type: Schema.Types.Number, required: true },
  },
});

export const ProductWithFurniture = model(
  "ProductWithFurniture",
  productWithFurniture
);
