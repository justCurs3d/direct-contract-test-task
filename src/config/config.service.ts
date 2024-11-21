import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    get mongoUrl(): string {
        return process.env.MONGO_URL;
    }
}
