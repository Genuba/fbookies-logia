import express from 'express';

import { json, urlencoded } from 'body-parser';
import saleOrderItemRouter from '../routes/saleOrderItem';
import saleOrderRouter from '../routes/saleOrder';

import cors from 'cors';

function createServer() {
    const app = express();
    app.use(json());
    app.use(urlencoded({ extended: true }));

    app.use(cors());

    app.use('/saleOrderItem', saleOrderItemRouter);
    app.use('/saleOrder', saleOrderRouter);

    return app;
}

export default createServer;
