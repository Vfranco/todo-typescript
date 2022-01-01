import { Component, Inject, OnInit } from "@angular/core";
import { RepositoryProvider } from '@app/core/constants/repository';
import { IRepositoryLocalStorage } from '@app/domain/localstorage/IRepositoryLocalStorage';
import { Task } from "@app/domain/tasks/task.model";
import { TaskStateService } from "@app/services/tasks-state.service";
import { AddTask, ChangeStatusTask, GetTasks, RemoveTask, UpdateTask } from "@app/store/tasks/task.actions";
import { TasksState } from "@app/store/tasks/task.state";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { TASKDATA } from './../../core/mock/task.mock';

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
  @Select(TasksState.getTasksList) tasks$: Observable<Task[]>;

  constructor(
    private taskStateService: TaskStateService,
    @Inject(RepositoryProvider.localStorageProvider) private storageService: IRepositoryLocalStorage,
    private store: Store
    ) {
      this.taskStateService.tasks = this.storageService.getItem(TASKDATA.taskKeyStorage);
    }

  ngOnInit(): void {
    this.store.dispatch(new GetTasks);
    this.storageService.getItem(TASKDATA.taskKeyStorage);
  }

  createTask(task: Task): void {
    this.taskLists.push(task);
    this.storageService.saveItem(TASKDATA.taskKeyStorage, this.taskLists);
    this.store.dispatch(new AddTask(task));
  }

  updateTaskName(event: any): void {
    const { id, taskName } = event;
    this.store.dispatch(new UpdateTask(id, taskName));
  }

  changeStatusTask(id: number): void {
    this.store.dispatch(new ChangeStatusTask(id));
  }

  deleteTask(id: number): void {
    this.store.dispatch(new RemoveTask(id));
  }
}
