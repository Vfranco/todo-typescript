import { Component, Inject, OnInit } from "@angular/core";
import { RepositoryProvider } from '@app/core/constants/repository';
import { IRepositoryTodo } from "@app/domain/IRepositoryTodo";
import { Task } from "@app/domain/task.model";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'todo'
  }
})
export class HomeComponent implements OnInit {

  successCreatedMessage: boolean = false;
  taskLists: Array<Task> = [];

  constructor(@Inject(RepositoryProvider.taskRepository) private taskService: IRepositoryTodo) { }

  ngOnInit(): void {
    this.taskLists = this.taskService.tasks;
  }

  createTask(task: Task): void {
    this.successCreatedMessage = this.taskService.createTask(task);
  }

  updateTaskName(event: any): void {
    const { id, taskName } = event;
    this.taskService.updateTask(id, taskName);
  }

  changeStatusTask(id: number): void {
    this.taskService.changeStateTask(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
