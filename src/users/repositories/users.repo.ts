import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/users.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async createOne(username: string) {
        return await this.userModel.create({ username });
    }

    async getOneByUsername(username: string) {
        return await this.userModel.findOne({ username });
    }
}
