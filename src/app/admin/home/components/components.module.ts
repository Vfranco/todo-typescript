import { TaskListComponent } from './task-list/tasklist.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";
import { FormCreateTaskComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, TaskListComponent, FormCreateTaskComponent],
  exports: [HeaderComponent, TaskListComponent, FormCreateTaskComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class HomeComponentsModule { }
