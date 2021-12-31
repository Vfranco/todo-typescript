import { Injectable } from "@angular/core";
import { IRepositoryTodo } from "@app/domain/tasks/IRepositoryTodo";
import { Task } from "@app/domain/tasks/task.model";

@Injectable()
export class TaskService implements IRepositoryTodo {

  public tasks: Array<Task> = [];

  createTask(task: Task): boolean {
    return (this.tasks.push(task) > 0) ? true : false;
  }

  readAllTasks(): Array<Task> {
    return this.tasks;
  }

  updateTask(id: number, taskName: string): void {
    this.tasks[id].taskName = taskName;
  }

  deleteTask(id: number): void {
    this.tasks.splice((id), 1);
  }

  changeStateTask(id: number): void {
    this.tasks[id].isComplete = true;
  }
}
