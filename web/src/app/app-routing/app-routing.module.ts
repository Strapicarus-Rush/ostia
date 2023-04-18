import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../layout/admin/admin.component';
// import { HomeComponent } from '../modules/home/home.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'admin', component: AdminLayoutComponent },
  { path: '', loadChildren: () => import('../modules/login/login.module').then(m => m.LoginModule)},
  { path: 'admin', loadChildren: () => import('../layout/admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
