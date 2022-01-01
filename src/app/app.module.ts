
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'environments/environment.prod';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TasksState } from './store/tasks/task.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxsModule.forRoot([TasksState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
