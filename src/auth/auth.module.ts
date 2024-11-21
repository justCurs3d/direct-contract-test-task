import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/users/users.module';
import { SessionsModule } from 'src/sessions/sessions.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [UsersModule, SessionsModule, JwtModule.register({ global: true })],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
