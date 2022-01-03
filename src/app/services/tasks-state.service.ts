import { Inject, Injectable } from "@angular/core";
import { RepositoryProvider } from "@app/core/constants/repository";
import { TASKDATA } from "@app/core/mock/task.mock";
import { IRepositoryLocalStorage } from "@app/domain/localstorage/IRepositoryLocalStorage";
import { Task } from "@app/domain/tasks/task.model";
import { Observable, of } from "rxjs";
import { LocalStorageService } from "./localstorage.service";

@Injectable({ providedIn: 'root' })
export class TaskStateService {

  public tasks: Task[] = [];

  createTask(task: Task): Observable<Task> {
    this.tasks.push(task);
    return of(task);
  }

  readAllTasks(): Observable<Task[]> {
    let tasks = window.localStorage.getItem(TASKDATA.taskKeyStorage);
    this.tasks = (tasks) ? JSON.parse(tasks) : [];
    return of(this.tasks);
  }

  updateTask(id: number, taskName: string): Observable<Task[]> {
    //this.tasks[id].taskName = taskName;
    return of(this.tasks);
  }

  deleteTask(id: number): Observable<Task[]> {
    console.log(id);
    this.tasks.splice(id, 1);
    return of(this.tasks);
  }

  changeStateTask(id: number): Observable<Task[]> {
    this.tasks[id].isComplete = true;
    return of(this.tasks);
  }
}
