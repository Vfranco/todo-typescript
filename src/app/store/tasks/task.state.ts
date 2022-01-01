import { Injectable } from '@angular/core';
import { TASKDATA } from '@app/core/mock/task.mock';
import { Task } from '@app/domain/tasks/task.model';
import { TaskStateService } from '@app/services/tasks-state.service';
import { GetTasks } from '@app/store/tasks/task.actions';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from 'rxjs';
import { AddTask, ChangeStatusTask, RemoveTask, UpdateTask } from './task.actions';
import { TaskStateModel } from './task.model';

@State<TaskStateModel>({
  name: TASKDATA.stateName,
  defaults: {
    tasks: []
  }
})
@Injectable()
export class TasksState {

  constructor(private readonly taskStateService: TaskStateService) { }

  @Selector()
  static getTasksList({ tasks }: TaskStateModel): Task[] { return tasks }

  @Action(AddTask)
  add({ getState, patchState }: StateContext<TaskStateModel>, { payload }: AddTask): Observable<Task> {
    return this.taskStateService.createTask(payload).pipe(
      tap((task: Task) => {
        const state = getState();
        patchState({
          tasks: [...state.tasks]
        });
      })
    );
  }

  @Action(GetTasks)
  get({ getState, setState }: StateContext<TaskStateModel>): Observable<Task[]> {
    return this.taskStateService.readAllTasks().pipe(
      tap((tasks: Task[]) => {
        const state = getState();
        setState({ ...state, tasks })
      })
    )
  }

  @Action(AddTask)
  update(
    { getState, setState }: StateContext<TaskStateModel>,
    { id, taskName }: UpdateTask): Observable<Task[]> {
    return this.taskStateService.updateTask(id, taskName).pipe(
      tap((tasks: Task[]) => {
        const state = getState();
        setState({ ...state.tasks, tasks });
      })
    )
  }

  @Action(RemoveTask)
  remove(
    { getState, patchState }: StateContext<TaskStateModel>,
    { id }: RemoveTask): Observable<Task[]> {
    return this.taskStateService.deleteTask(id).pipe(
      tap((tasks: Task[]) => {
        const state = getState();
        patchState({ ...state.tasks, tasks })
      })
    )
  }

  @Action(ChangeStatusTask)
  change(
    { getState, patchState }: StateContext<TaskStateModel>,
    { id }: ChangeStatusTask
  ): Observable<Task[]> {
    return this.taskStateService.changeStateTask(id).pipe(
      tap((tasks: Task[]) => {
        const state = getState();
        patchState({ ...state.tasks, tasks })
      })
    )
  }
}
