import { Injectable } from "@angular/core";
import { Task } from "@app/domain/tasks/task.model";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TaskStateService {

  public tasks: Task[] = [];

  createTask(task: Task): Observable<Task> {
    this.tasks.push(task);
    return of(task);
  }

  readAllTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  updateTask(id: number, taskName: string): Observable<Task[]> {
    console.log(this.tasks);
    //this.tasks[id].taskName = taskName;
    return of(this.tasks);
  }

  deleteTask(id: number): Observable<Task[]> {
    console.log(id);
    this.tasks.splice((id), 1);
    return of(this.tasks);
  }

  changeStateTask(id: number): Observable<Task[]> {
    this.tasks[id].isComplete = true;
    return of(this.tasks);
  }
}
