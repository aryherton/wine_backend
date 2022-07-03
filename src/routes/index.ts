import { Router } from 'express';

import Login from './LoginRoute';
import Product from './ProductRoute';

const routes = Router();

export default routes
  .use('/login', Login)
  .use('/product', Product);

