import { Injectable } from '@nestjs/common';
import { ClientsRepository } from '../repositories/clients.repo';

@Injectable()
export class ClientsService {
    constructor(private readonly clientsRepo: ClientsRepository) {}

    async getAllPaginated(limit: number, offset: number) {
        limit = limit > 1000 ? 1000 : limit;
        return await this.clientsRepo.getAllPaginated(limit, offset);
    }

    async getStatuses(userIds: number[]) {
        return await this.clientsRepo.getStatuses(userIds);
    }
}
