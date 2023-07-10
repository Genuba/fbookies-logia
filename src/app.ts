import connection from './db/config';

import { initProduct, initSaleOrder, initSaleOrderItem } from './db/init';
import { Product } from './models/product';
import { SaleOrder } from './models/saleOrder';
import { SaleOrderItem } from './models/saleOrderItem';
import createServer from './utils/server';

const PORT = 5000;

const app = createServer();

connection
  .sync({ force: true })
  .then(async () => {
    console.log('Database synced successfully');
    await initProduct.map(async (x) => await Product.create(x));
    await initSaleOrder.map(async (x) => await SaleOrder.create(x));
    await initSaleOrderItem.map(async (x) => await SaleOrderItem.create(x));
    console.log('Init data synced successfully');
  })
  .catch((err) => {
    console.log('Err', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
