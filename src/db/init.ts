export const initProduct = [
  {
    name: 'laptop',
    description: 'a laptop description',
    category: 'computer',
    manufacturer: 'Asus'
  },
  {
    name: 'iphone10',
    description: 'a phone description',
    category: 'phone',
    manufacturer: 'Apple'
  },
  {
    name: 'xiaomiA10',
    description: 'a phone description',
    category: 'phone',
    manufacturer: 'Xiaomi'
  }
];

export const initSaleOrder = [
  {
    customer: 'Mario',
    date: '2023-06-06',
    status: 'Pending'
  },
  {
    customer: 'Tienda 1',
    date: '2023-07-02',
    status: 'Pending'
  }
];

export const initSaleOrderItem = [
  {
    quantity: 1,
    unitPrice: 1000,
    totalPrice: 1000,
    productId: 1,
    saleOrderId: 1
  },
  {
    quantity: 10,
    unitPrice: 2000,
    totalPrice: 20000,
    productId: 2,
    saleOrderId: 2
  },
  {
    quantity: 5,
    unitPrice: 500,
    totalPrice: 2500,
    productId: 3,
    saleOrderId: 2
  }
];
