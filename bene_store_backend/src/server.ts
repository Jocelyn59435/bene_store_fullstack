import express, { Request, Response } from 'express';
import cors from 'cors';
import { product_routes } from './handlers/products';

const app: express.Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', function (_req: Request, res: Response) {
  res.send('Welcome to the grocery.');
});

product_routes(app);

app.listen(port, function () {
  console.log(`Sever is listening to ${port}.`);
});

export default app;
