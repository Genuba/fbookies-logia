import express from 'express';
import {
  createSaleOrder,
  deleteSaleOrder,
  getAllSaleOrder,
  updateSaleOrder,
  getSaleOrderById
} from '../controller/saleOrderController';

const router = express.Router();

router.post('/', createSaleOrder);
router.get('/', getAllSaleOrder);
router.get('/:id', getSaleOrderById);
router.put('/:id', updateSaleOrder);
router.delete('/:id', deleteSaleOrder);

export default router;
