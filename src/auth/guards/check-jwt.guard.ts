import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { SessionsService } from 'src/sessions/services/sessions.service';
import { IncorrectTokenError } from '../exceptions/auth.exceptions';

@Injectable()
export class CheckJwtGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly sessionService: SessionsService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request: Request = context.switchToHttp().getRequest();
        const token = this.extractAccessToken(request);
        const session = await this.sessionService.getSessionByToken(token);
        if (!session) throw new IncorrectTokenError();

        try {
            const { secret } = session;
            await this.jwtService.verifyAsync(token, { secret });
        } catch {
            throw new IncorrectTokenError();
        }

        return true;
    }

    private extractAccessToken(request: Request): string {
        const token = request.headers?.['authorization'] as string;
        if (!token) throw new HttpException('Токен авторизации не найден', 401);

        return token;
    }
}
