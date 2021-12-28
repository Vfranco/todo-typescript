import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponentsModule } from './home/components/components.module';
import { HomeComponent } from './home/home.component';
import { TaskProvider } from '@app/domain/task.provider';
import { adminRoutes } from './admin.routing';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    HomeComponentsModule
  ],
  providers: [TaskProvider]
})
export class AdminModule { }
