import { Injectable } from '@nestjs/common';
import { SessionsService } from 'src/sessions/services/sessions.service';
import { UsersService } from 'src/users/services/users.service';
import { UserAlreadyExistsException, UserNotFoundException } from '../exceptions/auth.exceptions';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly sessionsService: SessionsService,
        private readonly jwtService: JwtService,
    ) {}

    async registration(username: string): Promise<{ token: string }> {
        if (await this.userService.getUser(username)) throw new UserAlreadyExistsException();

        await this.userService.createUser(username);
        const { token, secret } = await this.generateJwt(username);
        await this.sessionsService.createSession({ username, token, secret });
        return { token };
    }

    async login(username: string): Promise<{ token: string }> {
        const user = await this.userService.getUser(username);
        if (!user) throw new UserNotFoundException();

        const { token, secret } = await this.generateJwt(username);
        await this.sessionsService.createSession({ username, token, secret });
        return { token };
    }

    private async generateJwt(username: string): Promise<{ secret: string; token: string }> {
        const secret = this.generateSecret();
        const payload = { username };
        const token = await this.jwtService.signAsync(payload, { secret });
        return { secret, token };
    }

    private generateSecret(): string {
        let secret = '';
        for (let i = 0; i < 7; i++) {
            secret += Math.random().toString(36).substring(2, 15);
        }
        return secret;
    }
}
