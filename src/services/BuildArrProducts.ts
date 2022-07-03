import UsersModel from '../database/model/UsersModel';
import IProduct from '../database/interface/IProduct';

export default class BuildArrProducts {
  constructor(private userModel = new UsersModel()) {}

  async insertProductArr(email: string, product: IProduct) {
    const [ { arrProduct } ] = await this.userModel.getByEmail(email);

    arrProduct?.push(product);

    return arrProduct;
  }
}