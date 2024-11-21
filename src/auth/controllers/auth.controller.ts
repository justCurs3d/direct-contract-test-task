import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dtos/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('registration')
    async registration(@Body() authDto: AuthDto) {
        const { username } = authDto;
        return this.authService.registration(username);
    }

    @Post('login')
    async login(@Body() authDto: AuthDto) {
        const { username } = authDto;
        return this.authService.login(username);
    }
}
