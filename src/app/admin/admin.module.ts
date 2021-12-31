import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServicesModule } from './../services/services.module';
import { adminRoutes } from './admin.routing';
import { HomeComponentsModule } from './home/components/components.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    HomeComponentsModule,
    ServicesModule
  ]
})
export class AdminModule { }
