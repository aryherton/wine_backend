import mongoose from 'mongoose';

import UsersSchemas from '../schemas/users';
import IUser from '../interface/IUser';
import IProduct from '../interface/IProduct';

export default class UsersModel {
  constructor(
    private model = mongoose.model('users', UsersSchemas)
  ){}

  async create(user: IUser): Promise<IUser & { _id: mongoose.Types.ObjectId }>{
    return this.model.create(user);
  }

  async getAll(): Promise<IUser[]> {
    return this.model.find();
  }

  async getByEmail(email: string): Promise<IUser[]> {
    return this.model.find({ email });
  }

  async updateProduct(email: string, arrProduct: IProduct[]): Promise<void> {
    await this.model.updateOne({ email }, { arrProduct });
  }

  async updateUser(email: string, user: IUser): Promise<void> {
    await this.model.updateOne({ email }, { ...user });
  }

  async deleteUser(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  }
}