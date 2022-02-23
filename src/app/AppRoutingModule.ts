import {NgModule} from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../app/home/home.component";
import {BusinessComponent} from "./business/business.component";
import {EntertainmentComponent} from "./entertainment/entertainment.component";
import {SearchingComponent} from "./searching/searching.component";

const appRouters: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path: 'home/:query', component: SearchingComponent},
  {path:'buisness',component:BusinessComponent},
  {path:'entertainment',component:EntertainmentComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
