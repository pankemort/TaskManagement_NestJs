import { Injectable } from '@nestjs/common';
import { NotFoundException} from '@nestjs/common/exceptions'
import { TaskStatus} from './tasks-status-enum';
import {v4 as uuid} from 'uuid';
import { CreateTaskdto } from './dto/create-tasks.dto';
import { GetTasksFilterdto } from './dto/get-tasks-filter.dto';
import { stat } from 'fs';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository: TasksRepository,
    ){}
// private tasks: Task[]= [];
// getAllTasks(): Task[]{
//         return this.tasks;
//     }

// getTaskWithFilters(filterDto :GetTasksFilterdto):Task[]{
//     const {status, search} = filterDto;
    
//     let tasks = this.getAllTasks();
//     if(status){
//         tasks = tasks.filter((task) =>task.status===status);
//     }
//     if(search){ 
//         tasks = tasks.filter((task) =>{
//             if(task.title.includes(search) || task.description.includes(search)){
//                 return true;
//             }
//             else return false;
//         });
//     }
//     return tasks;

    
// }

async getTaskById(id: string): Promise<Task>{
    const found = await this.tasksRepository.findOneBy({id:id});

    if(!found){
        throw new NotFoundException("nahi mil raha");
    }
    return found;
}

// getTaskById(id:string) :Task{
//  const found =  this.tasks.find((task) =>task.id ===id);
//  if(!found){
//     throw new NotFoundException("nahi mil raha");
//  }
//  return found;
// }


//     createTask(createTaskdto:CreateTaskdto) :Task{
//         const {title, description} = createTaskdto;
//         const task:Task = {
//             id: uuid(),
//             title,
//             description,
//             status:TaskStatus.OPEN,
//         }

//         this.tasks.push(task)

//         return task;
//     }

//     deleteTask(id:string) :void{
//         const found = this.getTaskById(id)
//         this.tasks = this.tasks.filter((task)=>task.id !==found.id);
//     }

//     updateTaskStatus(id:string ,status:TaskStatus){
//         const task = this.getTaskById(id);
//         task.status= status;
//         return task;
//     }
}

