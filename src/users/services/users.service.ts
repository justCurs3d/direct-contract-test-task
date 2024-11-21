import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repo';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepo: UsersRepository) {}

    async createUser(username: string) {
        return await this.usersRepo.createOne(username);
    }

    async getUser(username: string) {
        return await this.usersRepo.getOneByUsername(username);
    }
}
