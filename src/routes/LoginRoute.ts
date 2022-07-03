import { Router } from 'express';

import LoginCtrll from '../controller/LoginCtrll';
import ValidLogin from '../middlewares/ValidLoginMidd';

const ctrll = new LoginCtrll();
const router = Router();

export default router
  .post('/', ValidLogin.validLoginBody, ctrll.checkLogin)
  .post('/register', ValidLogin.validLoginRegister, ctrll.createLogin);
