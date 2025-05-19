// validation/product.js
const Joi = require('joi');

module.exports.productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  image: Joi.string().uri().required(),
  description: Joi.string().max(1000).required(),
  features: Joi.array().items(Joi.string()).min(1).required(),
  price: Joi.number().min(0).required()
});
