import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Task } from "@app/domain/tasks/task.model";

@Component({
  selector: 'form-create-task',
  templateUrl: './create.component.html'
})
export class FormCreateTaskComponent {
  @Output() createTask = new EventEmitter<Task>();
  public formCreateTask = new FormControl('', [Validators.required]);

  emitFrmCreateTask(): void {
    this.createTask.emit({taskName : this.formCreateTask.value, isComplete : false});
    this.formCreateTask.reset();
  }
}
