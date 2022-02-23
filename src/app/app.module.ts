import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';
import {BusinessComponent} from './business/business.component';
import {EntertainmentComponent} from './entertainment/entertainment.component';

import {HttpClientModule} from "@angular/common/http"
import {NewsapiservicesService} from "./services/newsapiservices.service";
import {AppRoutingModule} from "./AppRoutingModule";

import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {SearchingComponent} from './searching/searching.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BusinessComponent,
    EntertainmentComponent,
    SearchingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    LoadingBarHttpClientModule,
    FormsModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
