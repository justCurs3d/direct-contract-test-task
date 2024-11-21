import { Module } from '@nestjs/common';
import { ClientsService } from './services/clients.service';
import { ClientsController } from './controllers/clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './models/clients.model';
import { ClientsRepository } from './repositories/clients.repo';

@Module({
    imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }])],
    providers: [ClientsService, ClientsRepository],
    controllers: [ClientsController],
})
export class ClientsModule {}
