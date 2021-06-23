import client from '../database';

export type Product = {
  id: number;
  product_name: string;
  product_price: number;
  product_category: string;
  src: string;
  product_description: string;
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM products';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Could not get products. Error: ${err}`);
    }
  }
}
