import Joi from 'joi';

export const saleOrderItemSchema = Joi.object({
    quantity: Joi.number().min(1).max(100).required(),
    unitPrice: Joi.number().required(),
    totalPrice:Joi.number().required(),
    productId: Joi.number().required(),
    saleOrderId: Joi.number().required()
})