import { Injectable } from '@angular/core';
import { TASKDATA } from '@app/core/mock/task.mock';
import { IRepositoryLocalStorage } from "@app/domain/localstorage/IRepositoryLocalStorage";
import { Task } from "@app/domain/tasks/task.model";

@Injectable()
export class LocalStorageService implements IRepositoryLocalStorage {

  private dataFromStorage: any;
  private taskList: Task[] = [];

  constructor() {
    let tasks = this.getItem(TASKDATA.taskKeyStorage);
    this.taskList = (tasks) ? tasks : [];
  }

  saveItem(key: string, data: any): void {
    return window.localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string): any {
    this.dataFromStorage = window.localStorage.getItem(key);
    this.taskList = JSON.parse(this.dataFromStorage);

    return (this.dataFromStorage === null) ? [] : JSON.parse(this.dataFromStorage);
  }

  updateItem(id: number, taskName: string): void {
    this.taskList[id].taskName = taskName;
    this.saveItem(TASKDATA.taskKeyStorage, this.taskList);
  }

  deleteItem(id: number): void {
    this.taskList.splice(id, 1);
    this.saveItem(TASKDATA.taskKeyStorage, this.taskList);
  }

  changeStatusItem(id: number): void {
    this.taskList[id].isComplete = true;
    this.saveItem(TASKDATA.taskKeyStorage, this.taskList);
  }
}
