import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroComponent } from './pages/heroes-list/components/hero/hero.component';
import { HeaderComponent } from './pages/heroes-list/components/header/header.component';
import { BannerComponent } from './pages/heroes-list/components/banner/banner.component';
import { FooterComponent } from './pages/heroes-list/components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeroesListComponent, HeroComponent, HeaderComponent, BannerComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
