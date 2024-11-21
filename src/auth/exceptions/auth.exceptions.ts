import { HttpException, UnauthorizedException } from '@nestjs/common';

export class UserAlreadyExistsException extends HttpException {
    constructor() {
        super('Пользователь с таким именем уже существует', 400);
    }
}

export class UserNotFoundException extends HttpException {
    constructor() {
        super('Пользователя с таким именем не существует', 401);
    }
}

export class IncorrectTokenError extends HttpException {
    constructor() {
        super('Неверный токен', 401);
    }
}
