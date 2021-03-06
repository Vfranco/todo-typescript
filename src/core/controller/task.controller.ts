import { TaskModel } from "../domain/task.model";
import { TodoActions } from "../domain/todo.interface";

export class TaskController {

    constructor(private todoService: TodoActions) { }

    create(task: TaskModel): void {
        return this.todoService.createTask(task);
    }

    read(): void {
        return this.todoService.readAllTasks();
    }

    update(index: number, taskName: string | null): void {
        return this.todoService.updateTask(index, taskName);
    }

    delete(index: number): void {
        this.todoService.deleteTask(index);
    }

    change(index: number): void {
        this.todoService.changeStatusTask(index);
    }
}
