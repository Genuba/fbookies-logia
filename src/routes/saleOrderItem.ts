import express from 'express';
import {
  createSaleOrderItem,
  deleteSaleOrderItem,
  getAllSaleOrderItem,
  updateSaleOrderItem,
  getSaleOrderItemById
} from '../controller/saleOrderItemController';

const router = express.Router();

router.post('/', createSaleOrderItem);
router.get('/', getAllSaleOrderItem);
router.get('/:id', getSaleOrderItemById);
router.put('/:id', updateSaleOrderItem);
router.delete('/:id', deleteSaleOrderItem);

export default router;
