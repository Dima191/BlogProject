import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import {PostsPageComponent} from './posts-page/posts-page.component';
import {InfoPageComponent} from './info-page/info-page.component';
import {GreetingPageComponent} from './greeting-page/greeting-page.component';
import {PostComponent} from './post/post.component';


const routes: Routes = [
      {path: '', component: GreetingPageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'posts', component: PostsPageComponent},
      {path: 'info', component: InfoPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
