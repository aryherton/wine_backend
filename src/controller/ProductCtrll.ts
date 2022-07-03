import { Request, Response } from 'express';

import StatusHttp from '../enum/statusHttp';
import Messages from '../enum/messageRes';
import IProduct from '../database/interface/IProduct';
import Token from '../help/Token';
import ProductServ from '../services/Product';
import { JwtPayload } from 'jsonwebtoken';

export default class MessageCtrll {

  async setProductCtrll(req: Request, res: Response) {
    try {
        const { authorization } = req.headers;
        const product: IProduct[] = req.body;
        
        if (authorization) {
          const user = Token.validToken(authorization) as JwtPayload;
          const productServ = new ProductServ();

          await productServ.setProduct(user.email, product);

        return res.status(StatusHttp.OK).json({ message: Messages.UPDATE_SUCCESS });
        }

        return res.status(StatusHttp.NO_CONTENT).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
        console.log(e);
        return res.status(StatusHttp.SERVER_ERROR).json({ message: Messages.ERROR_SERVER });
    }
  }

  async getProductCtrll(req: Request, res: Response) {
    try {
      const { authorization } = req.headers;

      if (authorization) {
        const user = Token.validToken(authorization) as JwtPayload;
        const productServ = new ProductServ();
        const arrProduct = await productServ.getProduct(user.email);

        return res.status(StatusHttp.OK).json({ arrProduct });
      }

      return res.status(StatusHttp.OK).json({ message: Messages.NOT_TOKEN });
    } catch(e) {
      console.log(e);
    }
  }
}