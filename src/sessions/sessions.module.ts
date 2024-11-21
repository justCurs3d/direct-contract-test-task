import { Global, Module } from '@nestjs/common';
import { SessionsService } from './services/sessions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, SessionSchema } from './models/sessions.model';
import { SessionsRepository } from './repositories/sessions.repo';

@Global()
@Module({
    imports: [MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }])],
    providers: [SessionsService, SessionsRepository],
    exports: [SessionsService],
})
export class SessionsModule {}
