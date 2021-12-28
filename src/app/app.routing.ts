import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

const AppRoute: Routes = [
  { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoute, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
