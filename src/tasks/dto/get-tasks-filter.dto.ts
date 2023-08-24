import { TaskStatus } from "../tasks-status-enum";
import {IsOptional,IsEnum,IsString} from 'class-validator';

export class GetTasksFilterdto{
    @IsOptional()
    @IsEnum(TaskStatus)
    status? : TaskStatus;
    @IsOptional()
    @IsString()
    search?: string;
}