import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { CompleteComponent } from './complete/complete.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TodoPageComponent,
    InProgressComponent,
    CompleteComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    AddDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
