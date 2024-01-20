import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from "./hello.component";
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  //khai báo component
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
  ],
  // search gg
  // khai báo component ngoài -> 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // search gg
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
