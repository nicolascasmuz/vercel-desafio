import type { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const { product, price } = req.query;

    const stock = [
      { id: 1, product: "mate", price: 400, stock: true },
      { id: 2, product: "yerba", price: 120, stock: true },
      { id: 3, product: "harina", price: 90, stock: false },
      { id: 4, product: "huevo", price: 50, stock: true },
      { id: 5, product: "iphone", price: 50000000, stock: false },
      { id: 6, product: "volkswagen", price: 1000000, stock: true },
      { id: 7, product: "leche", price: 60, stock: true },
      { id: 8, product: "pan", price: 25, stock: false },
      { id: 9, product: "mayonesa", price: 80, stock: true },
      { id: 10, product: "queso", price: 100, stock: true },
      { id: 11, product: "jamon", price: 130, stock: false },
      { id: 12, product: "salame", price: 200, stock: false },
    ];

    const foundProduct = stock.find((p) => {
      const productInStock = p.product == product;
      return productInStock;
    });

    function productFoundInAPriceRange() {
      if (foundProduct.price <= Number(price)) {
        return foundProduct;
      } else {
        return "no products found";
      }
    }

    const filteredPrices = stock.filter((p) => {
      const priceRange = p.price <= Number(price);
      return priceRange;
    });

    if (product && !price) {
      res.status(200).send(foundProduct);
    } else if (!product && price) {
      res.status(200).send(filteredPrices);
    } else if (product && price) {
      res.status(200).send(productFoundInAPriceRange());
    } else {
      res.status(400).send("not allowed");
    }
  },
});
