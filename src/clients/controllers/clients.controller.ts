import { Body, Controller, Get, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { CheckJwtGuard } from 'src/auth/guards/check-jwt.guard';
import { GetClientQueryDto } from '../dtos/get-clients.dto';
import { ClientsService } from '../services/clients.service';
import { GetStatusesDto } from '../dtos/get-statuses.dto';

@UseGuards(CheckJwtGuard)
@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Get()
    async getClients(@Query() getClientsDto: GetClientQueryDto) {
        const { limit = 1000, offset } = getClientsDto;
        return this.clientsService.getAllPaginated(limit, offset);
    }

    @Post()
    async getStatuses(@Body() getStatusesDto: GetStatusesDto) {
        const { userIds } = getStatusesDto;
        return this.clientsService.getStatuses(userIds)
    }
}
