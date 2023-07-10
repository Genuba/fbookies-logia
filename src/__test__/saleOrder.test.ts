import supertest from "supertest";
import { create } from "../service/saleOrderService";
import { SaleOrder } from "../models/saleOrder";
import connection from "../db/config";
import createServer from "../utils/server";

const app = createServer();

export const saleOrderPayload = {
  id: 22,
  customer: 'Mario',
  date: new Date('2023-06-06'),
  status: 'Pending'
} as SaleOrder;

describe("saleOrder", () => {
  beforeAll(async () => {
    await connection
      .sync({ force: true })
      .then(async () => {
        console.log('Database synced successfully');
      })
      .catch((err) => {
        console.log('Err', err);
      });
  });

  afterAll(async () => {
    await connection.close();
  });

  describe("get saleOrder route", () => {
    describe("given the saleOrder does not exist", () => {
      it("should return a 404", async () => {
        const id = 100;

        const { body } = await supertest(app).get(`/saleOrder/${id}`);
        expect(body.data).toBe(null)
      });
    });

    describe("given the saleOrder does exist", () => {
      it("should return a 200 status and the saleOrder", async () => {
        console.log(saleOrderPayload)
        const saleOrder = await create(saleOrderPayload);

        const { body, statusCode } = await supertest(app).get(
          `/saleOrder/${saleOrder.id}`
        );

        expect(statusCode).toBe(200);

        expect(body.data.id).toBe(saleOrder.id);
      });
    });
  });
});