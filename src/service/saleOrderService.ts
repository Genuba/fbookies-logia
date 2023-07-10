import { SaleOrder } from '../models/saleOrder';

export const create = async (res: any) => {
  console.log('hello')
  console.log({...res})
  const saleOrder = await SaleOrder.create({...res});
  return saleOrder;
};
