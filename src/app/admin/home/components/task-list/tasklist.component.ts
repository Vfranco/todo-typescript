import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TaskData } from "@app/domain/task.class";
import { Task } from "@app/domain/task.model";

@Component({
  selector: 'task-list-component',
  templateUrl: './tasklist.component.html'
})
export class TaskListComponent implements OnInit {
  @Input() task: Task = new TaskData;
  @Input() id: number = 0;
  @Output() emitDeleteTask = new EventEmitter<number>();
  @Output() changeStateTask = new EventEmitter<number>()
  @Output() emitUpdateTaskName = new EventEmitter<any>();

  toggleInput: boolean = true;
  newTaskName = new FormControl();

  ngOnInit(): void {
      this.newTaskName.setValue(this.task.taskName);
  }

  deleteTask(id: number): void {
    this.emitDeleteTask.emit(id);
  }

  updateTaskName(id: number): void {
    this.emitUpdateTaskName.emit({ id: id, taskName : this.newTaskName.value });
    this.toggleInput = true;
  }

  changeTask(id: number): void {
    this.changeStateTask.emit(id);
  }

  toggleInputUpdate(): void {
    this.toggleInput = false;
  }
}
