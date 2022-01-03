import { Component, Inject, OnInit } from "@angular/core";
import { RepositoryProvider } from '@app/core/constants/repository';
import { TASKDATA } from "@app/core/mock/task.mock";
import { IRepositoryLocalStorage } from '@app/domain/localstorage/IRepositoryLocalStorage';
import { Task } from "@app/domain/tasks/task.model";
import { TaskStateService } from "@app/services/tasks-state.service";
import { AddTask, ChangeStatusTask, GetTasks, RemoveTask, UpdateTask } from "@app/store/tasks/task.actions";
import { TasksState } from "@app/store/tasks/task.state";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";

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

  get tasksIsEmpty(): boolean {
    this.tasks$.subscribe((result) => this.taskLists = result);
    return (this.taskLists.length === 0) ? true : false;
  }

  constructor(
    private taskStateService: TaskStateService,
    @Inject(RepositoryProvider.localStorageProvider) private storageService: IRepositoryLocalStorage,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTasks);
  }

  createTask(task: Task): void {
    this.storageService.saveItem(TASKDATA.taskKeyStorage, this.taskLists);
    this.store.dispatch(new AddTask(task));
  }

  updateTaskName(event: any): void {
    const { id, taskName } = event;
    this.storageService.updateItem(id, taskName);
    this.store.dispatch(new UpdateTask(id, taskName));
    this.store.dispatch(new GetTasks);
  }

  changeStatusTask(id: number): void {
    this.storageService.changeStatusItem(id);
    this.store.dispatch(new ChangeStatusTask(id));
  }

  deleteTask(id: number): void {
    this.storageService.deleteItem(id);
    this.store.dispatch(new RemoveTask(id));
  }
}
