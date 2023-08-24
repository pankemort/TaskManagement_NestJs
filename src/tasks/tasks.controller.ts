import { Controller, Get, Post, Body, Param, Delete, Patch,Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {  TaskStatus } from './tasks-status-enum';
import { title } from 'process';
import { CreateTaskdto } from './dto/create-tasks.dto';
import { get } from 'http';
import { GetTasksFilterdto } from './dto/get-tasks-filter.dto';
import { filter } from 'rxjs';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    // @Get()
    // getTasks(@Query() filterDto: GetTasksFilterdto): Task[] {
    //     if(Object.keys(filterDto).length){
    //         return this.tasksService.getTaskWithFilters(filterDto);
    //     }
    //     else{ 
    //         return this.tasksService.getAllTasks() //this one is from service and not from the above function;
            
    // }
     
    // }


    @Get('/:id')
    getTaskById(@Param('id') id:string):Promise<Task>{
        return this.tasksService.getTaskById(id);
    }

    // @Post()
    // createTasks(@Body() createTaskdto: CreateTaskdto)  :Task
    // {
    //     return this.tasksService.createTask(createTaskdto)
    // }
    // @Delete('/:id')
    // deleteTask(@Param('id') id:string) :void{
    //     return this.tasksService.deleteTask(id);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(@Param('id') id:string,
    // @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    // ) :Task{
    //     const {status} = updateTaskStatusDto;
    //     return this.tasksService.updateTaskStatus(id,status);

    // }



}
