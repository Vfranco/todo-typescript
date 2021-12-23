import { TaskModel } from './task.model';

export interface TodoActions {
    createTask(task: TaskModel): void
    readAllTasks(): void
    updateTask(index: number, taskName: string | null): void
    deleteTask(index: number): void
    changeStatusTask(index: number): void
}