import { Sequelize } from 'sequelize-typescript';
import { SaleOrderItem } from '../models/saleOrderItem';
import { SaleOrder } from '../models/saleOrder';
import { Product } from '../models/product';

const connection = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  schema: 'public',
  logging: false,
  models: [Product, SaleOrder, SaleOrderItem]
});

export default connection;
