import { Component, Inject, OnInit } from "@angular/core";
import { RepositoryProvider } from '@app/core/constants/repository';
import { TASKDATA } from '@app/core/mock/task.mock';
import { IRepositoryLocalStorage } from '@app/domain/localstorage/IRepositoryLocalStorage';
import { IRepositoryTodo } from "@app/domain/tasks/IRepositoryTodo";
import { Task } from "@app/domain/tasks/task.model";

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

  constructor(
    @Inject(RepositoryProvider.taskRepository) private taskService: IRepositoryTodo,
    @Inject(RepositoryProvider.localStorageProvider) private storageService: IRepositoryLocalStorage
  ) { }

  ngOnInit(): void {
    this.taskLists = this.storageService.getItem(TASKDATA.taskKeyStorage);
  }

  createTask(task: Task): void {
    this.successCreatedMessage = this.taskService.createTask(task);
    this.storageService.saveItem(TASKDATA.taskKeyStorage, this.taskLists);
  }

  updateTaskName(event: any): void {
    const { id, taskName } = event;
    this.storageService.updateItem(id, taskName);
  }

  changeStatusTask(id: number): void {
    this.storageService.changeStatusItem(id);
  }

  deleteTask(id: number): void {
    this.storageService.deleteItem(id);
  }
}
