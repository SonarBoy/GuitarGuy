import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { MusicComponent } from './music/music.component';
import { PrayersComponent } from './prayers/prayers.component';
import { StoryComponent } from './story/story.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'contact',component:ContactComponentComponent},
  {path: 'story', component:StoryComponent},
  {path: 'prayers',component:PrayersComponent},
  {path: 'music',component:MusicComponent},
  {path: 'links',component:LinksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
