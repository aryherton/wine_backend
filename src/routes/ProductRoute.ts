import { Router } from 'express';

import MessageCtrll from '../controller/ProductCtrll';

const ctrll = new MessageCtrll();
const router = Router();

export default router
  .get('/', ctrll.getProductCtrll)
  .post('/', ctrll.setProductCtrll);
