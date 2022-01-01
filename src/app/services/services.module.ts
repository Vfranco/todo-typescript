
import { NgModule } from "@angular/core";
import { LocalStorageProvider } from '@app/domain/localstorage/localstorage.provider';
import { TaskProvider } from "@app/domain/tasks/task.provider";
import { TaskStateService } from "./tasks-state.service";

@NgModule({
  providers: [TaskProvider, LocalStorageProvider, TaskStateService]
})
export class ServicesModule { }
