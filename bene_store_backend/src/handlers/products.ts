import express, { Request, Response } from 'express';
import { ProductStore } from '../models/product';

const store = new ProductStore();
const index = async (_req: Request, res: Response) => {
  try {
    const products = await store.index();
    res.json(products);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
};

const product_routes = (app: express.Application): void => {
  app.get('/products', index);
};

export { product_routes, store };
