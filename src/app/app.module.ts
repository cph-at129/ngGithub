import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { GithubService } from './services/github.service';
import { NavigationTopComponent } from './shared/navigation-top/navigation-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavigationTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
