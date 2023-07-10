import { RequestHandler } from 'express';
import { SaleOrder } from '../models/saleOrder';
import { SaleOrderItem } from '../models/saleOrderItem';
import { create } from '../service/saleOrderService';

export const createSaleOrder: RequestHandler = async (req, res, _next) => {
  const saleOrder = await create(req.body);
  return res
    .status(200)
    .json({ message: 'Sale order created successfully', data: saleOrder });
};

export const deleteSaleOrder: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  const deleted: SaleOrder | null = await SaleOrder.findByPk(id);

  await SaleOrder.destroy({ where: { id } });

  return res
    .status(200)
    .json({ message: 'Sale Order deleted successfully', data: deleted });
};

export const getAllSaleOrder: RequestHandler = async (_req, res, _next) => {
  const alls: SaleOrder[] = await SaleOrder.findAll({
    include: SaleOrderItem
  });

  return res
    .status(200)
    .json({ message: 'Sale Order fetched successfully', data: alls });
};

export const getSaleOrderById: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  const saleOrder: SaleOrder | null = await SaleOrder.findByPk(id);

  //if (!saleOrder) return res.status(404)

  return res
    .status(200)
    .json({ message: 'Sale Order fetched successfully', data: saleOrder });
};

export const updateSaleOrder: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  await SaleOrder.update({ ...req.body }, { where: { id } });
  const updated: SaleOrder | null = await SaleOrder.findByPk(id);
  return res
    .status(200)
    .json({ message: 'Sale Order updated successfully', data: updated });
};
