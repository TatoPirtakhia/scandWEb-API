import Joi from "joi";

export const productTypeSchemaDVD = async () => {
  return Joi.object({
    id: Joi.string().required().messages({
      "any.required": "ID is required.",
      "string.empty": "ID must not be empty.",
    }),
    name: Joi.string().required().messages({
      "any.required": "Name is required.",
      "string.empty": "Name must not be empty.",
    }),
    price: Joi.number().required().messages({
      "any.required": "Price is required.",
      "number.base": "Price must be a number.",
    }),
    DVD: Joi.object({
      size: Joi.number().required().messages({
        "any.required": "DVD size is required.",
        "number.base": "DVD size must be a number.",
      }),
    }),
  });
};

export const productTypeSchemaBook = async () => {
  return Joi.object({
    id: Joi.string().required().messages({
      "any.required": "ID is required.",
      "string.empty": "ID must not be empty.",
    }),
    name: Joi.string().required().messages({
      "any.required": "Name is required.",
      "string.empty": "Name must not be empty.",
    }),
    price: Joi.number().required().messages({
      "any.required": "Price is required.",
      "number.base": "Price must be a number.",
    }),
    Book: Joi.object({
      Weight: Joi.number().required().messages({
        "any.required": "Book weight is required.",
        "number.base": "Book weight must be a number.",
      }),
    }),
  });
};

export const productTypeSchemaFurniture = async () => {
  return Joi.object({
    id: Joi.string().required().messages({
      "any.required": "ID is required.",
      "string.empty": "ID must not be empty.",
    }),
    name: Joi.string().required().messages({
      "any.required": "Name is required.",
      "string.empty": "Name must not be empty.",
    }),
    price: Joi.number().required().messages({
      "any.required": "Price is required.",
      "number.base": "Price must be a number.",
    }),
    Furniture: Joi.object({
      Height: Joi.number().required().messages({
        "any.required": "Furniture height is required.",
        "number.base": "Furniture height must be a number.",
      }),
      Width: Joi.number().required().messages({
        "any.required": "Furniture width is required.",
        "number.base": "Furniture width must be a number.",
      }),
      Length: Joi.number().required().messages({
        "any.required": "Furniture length is required.",
        "number.base": "Furniture length must be a number.",
      }),
    }),
  });
};
