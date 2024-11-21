import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from '../models/clients.model';

@Injectable()
export class ClientsRepository {
    constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

    async getAllPaginated(limit: number, offset: number) {
        return await this.clientModel.find().limit(limit).skip(offset).select('-status');
    }

    async getStatuses(userIds: number[]) {
        return await this.clientModel.find({ id: { $in: userIds } }).select(['id', 'status']);
    }
}
