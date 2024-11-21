import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { ClientsModule } from './clients/clients.module';

@Module({
    imports: [
        AuthModule,
        ConfigModule,
        MongooseModule.forRootAsync({
            useFactory: (appConfig: ConfigService) => ({
                uri: appConfig.mongoUrl,
            }),
            inject: [ConfigService],
        }),
        UsersModule,
        SessionsModule,
        ClientsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
