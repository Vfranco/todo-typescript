import { Task } from "./task.model";

export class TaskData implements Task {
  taskName: string = '';
  isComplete: boolean = false;
}
