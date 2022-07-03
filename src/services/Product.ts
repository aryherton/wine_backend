import UsersModel from '../database/model/UsersModel';
import IProduct from '../database/interface/IProduct';

export default class Product {
  constructor(private userModel = new UsersModel()){}

 async setProduct(email: string, arrProduct: IProduct[]) {
  await this.userModel.updateProduct(email, arrProduct);
 }

 async getProduct(email: string) {
  const [ user ] = await this.userModel.getByEmail(email);
  
  return user.arrProduct;
 }
}