import { Injectable } from '@nestjs/common';
import { SessionsRepository } from '../repositories/sessions.repo';
import { SessionType } from '../types/types';

@Injectable()
export class SessionsService {
    constructor(private readonly sessionsRepo: SessionsRepository) {}

    async createSession(session: SessionType) {
        return await this.sessionsRepo.createOne(session);
    }

    async getSessionByToken(token: string) {
        return await this.sessionsRepo.getSessionByToken(token);
    }
}
