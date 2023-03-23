import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad/ad.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './dynamic-Components/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-Components/hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
