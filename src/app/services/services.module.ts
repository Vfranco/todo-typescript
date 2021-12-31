
import { NgModule } from "@angular/core";
import { LocalStorageProvider } from '@app/domain/localstorage/localstorage.provider';
import { TaskProvider } from "@app/domain/tasks/task.provider";

@NgModule({
  providers: [TaskProvider, LocalStorageProvider]
})
export class ServicesModule { }
