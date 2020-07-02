import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GreetingPageComponent,
    AboutPageComponent,
    PostsPageComponent,
    InfoPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
