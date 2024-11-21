import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session } from '../models/sessions.model';
import { SessionType } from '../types/types';

@Injectable()
export class SessionsRepository {
    constructor(@InjectModel(Session.name) private sessionModel: Model<Session>) {}

    async createOne(session: SessionType) {
        return await this.sessionModel.create(session);
    }

    async getSessionByToken(token: string) {
        return await this.sessionModel.findOne({ token: token });
    }
}
