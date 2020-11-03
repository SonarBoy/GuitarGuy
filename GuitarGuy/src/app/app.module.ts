import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { SnotifyService,SnotifyModule,ToastDefaults } from 'ng-snotify';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { PrayersComponent } from './prayers/prayers.component';
import { LinksComponent } from './links/links.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponentComponent,
    HomeComponent,
    StoryComponent,
    PrayersComponent,
    LinksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnotifyModule
  ],
  providers: [
    {provide: 'SnotifyToastConfig',useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
