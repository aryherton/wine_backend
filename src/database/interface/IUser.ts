import IProduct from './IProduct';

export default interface User {
  name: string,
  email: string,
  password: string,
  arrProduct?: IProduct[],
}
