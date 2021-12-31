import { Task } from "./task.model";

export interface IRepositoryTodo {
  tasks: Array<Task>
  createTask(task: Task): boolean
  readAllTasks(): void
  updateTask(id: number, taskName: string): void
  deleteTask(id: number): void,
  changeStateTask(id: number): void
}
