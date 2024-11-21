import { IsArray, IsInt, IsNumber } from 'class-validator';

export class GetStatusesDto {
    @IsArray()
    @IsInt({ each: true })
    userIds: number[];
}
