import { TaskModel } from '../domain/task.model';
import { TodoActions } from '../domain/todo.interface';

export class Todo implements TodoActions {

    myListasks: Array<TaskModel> = [];

    createTask(task: TaskModel): void {
        this.myListasks.push(task);
    }

    readAllTasks(): void {
        this.myListasks.forEach((task, index) => console.log(`ID: ${index + 1} - ${task.taskName} | ${(!task.isComplete) ? 'No Completada': 'Completada'}`));
    }

    updateTask(index: number, taskNameUpdate: string | null): void {
        this.myListasks[index - 1].taskName = taskNameUpdate;
    }

    deleteTask(index: number): void {
        this.myListasks.splice((index - 1), 1);
    }

    changeStatusTask(index: number): void {
        this.myListasks[index - 1].isComplete = true;
    }
}
