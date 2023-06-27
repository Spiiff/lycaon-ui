import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectlistComponent } from './pages/projectlist/projectlist.component';
import { ProjectmodifyComponent } from './pages/projectmodify/projectmodify.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProjectreadComponent } from './pages/projectread/projectread.component';
import {ProjectcreateComponent} from "./pages/projectcreate/projectcreate.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectlistComponent,
    ProjectmodifyComponent,
    ProjectcreateComponent,
    ProjectreadComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
