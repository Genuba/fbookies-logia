DROP TABLE IF EXISTS public."product" CASCADE;
DROP TABLE IF EXISTS public."saleOrder" CASCADE;
DROP TABLE IF EXISTS public."saleOrderItem" CASCADE;

-- create tables
CREATE TABLE public."product"(
   id SERIAL PRIMARY KEY,
   name VARCHAR(100) NOT NULL,
   description VARCHAR(255) NOT NULL,
   category VARCHAR(15),
   manufacturer VARCHAR(100)
);

CREATE TABLE public."saleOrder"(
   id SERIAL PRIMARY KEY,
   customer VARCHAR(100) NOT NULL,
   date DATE NOT NULL,
   status VARCHAR(15)
);

CREATE TABLE public."saleOrderItem"(
   id SERIAL PRIMARY KEY,
   quantity INT NOT NULL,
   unitPrice NUMERIC NOT NULL,
   totalPrice NUMERIC NOT NULL,
   productId INT NOT NULL,
   saleOrderId INT NOT NULL,
   CONSTRAINT fk_product
      FOREIGN KEY(productId) 
	  REFERENCES product(id),
   CONSTRAINT fk_saleOrder
      FOREIGN KEY(saleOrderId) 
	  REFERENCES saleOrder(id)
);

-- create init data

INSERT INTO public."product"(
	name, description, category, manufacturer)
	VALUES ('laptop', 'a laptop description', 'computer', 'Asus');

INSERT INTO public."product"(
	name, description, category, manufacturer)
	VALUES ('iphone10', 'a phone description', 'phone', 'Apple');

INSERT INTO public."product"(
	name, description, category, manufacturer)
	VALUES ('xiaomiA10', 'a phone description', 'phone', 'Xiaomi');

INSERT INTO public."saleOrder"(
	customer, date, status)
	VALUES ('Mario', '2023-06-06', 'Pending');

INSERT INTO public."saleOrder"(
	customer, date, status)
	VALUES ('Tienda 1', '2023-07-02', 'Pending');

INSERT INTO public."saleOrderItem"(
	quantity, "unitPrice", "totalPrice", "productId", "saleOrderId")
	VALUES ('1', 1000, 1000, 1, 1);

INSERT INTO public."saleOrderItem"(
	quantity, "unitPrice", "totalPrice", "productId", "saleOrderId")
	VALUES ('10', 2000, 20000, 2, 2);

INSERT INTO public."saleOrderItem"(
	quantity, "unitPrice", "totalPrice", "productId", "saleOrderId")
	VALUES ('5', 500, 2500, 3, 2);