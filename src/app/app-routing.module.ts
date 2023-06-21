import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/Pages/home/home.component';
import { AboutUsComponent } from './module/Pages/about-us/about-us.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
