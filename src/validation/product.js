import Joi, { any } from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().trim().lowerCase().min(3).max(20).required().messages({
    "string.base": "name product have a string",
    "string.min": "Name product have at least {#limit} characters",
    "string.max": "Name product have at most {#limit} characters",
    "any.required": "Name product is required",
  }),
  price: Joi.number().min(0.01).precision(2).required().messages({
    "number.base": "Price have a number",
    "number.min": "Price must be at least {#limit}",
    "any.required": "Price is a required",
  }),
  category: Joi.string()
    .trim()
    .valid(["books", "electronics", "clothing", "other"])
    .message({
      "string.base": "Category have a string",
      "any.only": "Category must be on of books, electroncs and clothing",
    }),
  description: Joi.string().trim().max(500).messages({
    "string.max": "Description must be at most {#limit} characters",
  }),
});


export const editProductSchema = Joi.object({
  name: Joi.string().trim().lowerCase().min(3).max(20).messages({
    "string.base": "name product have a string",
    "string.min": "Name product have at least {#limit} characters",
    "string.max": "Name product have at most {#limit} characters",
  }),
  price: Joi.number().min(0.01).precision(2).messages({
    "number.base": "Price have a number",
    "number.min": "Price must be at least {#limit}",
  }),
  category: Joi.string()
    .trim()
    .valid(["books", "electronics", "clothing", "other"])
    .message({
      "string.base": "Category have a string",
      "any.only": "Category must be on of books, electroncs and clothing",
    }),
  description: Joi.string().trim().max(500).messages({
    "string.max": "Description must be at most {#limit} characters",
  }),
});
