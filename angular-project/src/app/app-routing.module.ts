import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
 {path: "login", 
 component: LoginComponent
},
 {path: "pages", loadChildren: ()=> import('./pages/pages.module').then(mod=> mod.PagesModule)}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
