import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'add-detail',component:AddDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
