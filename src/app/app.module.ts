import { MenuService } from './services/menu.service';
import { HeroService } from './hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UserService } from './user.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentMainComponent } from './components/content-main/content-main.component';
import { ContentProductComponent } from './components/content-product/content-product.component';
import { ReferencesComponent } from './components/references/references.component';
import { FeaturesComponent } from './components/features/features.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { ClientsComponent } from './components/clients/clients.component';
import { StyleSwitcherComponent } from './components/style-switcher/style-switcher.component';
import { HeaderComponent } from './components/header/header.component';
import { SloganComponent } from './components/slogan/slogan.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { JumboprintComponent } from './components/jumboprint/jumboprint.component';
import { ServicesComponent } from './components/services/services.component';
import { ShowErrorsComponent } from './components/contact/show-errors/show-errors.component';
import { PictureComponent } from './components/picture/picture.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BannerComponent,
    SloganComponent,
    HeaderComponent,
    FooterComponent,
    ContentMainComponent,
    ContentProductComponent,
    ReferencesComponent,
    FeaturesComponent,
    LatestPostsComponent,
    ClientsComponent,
    StyleSwitcherComponent,
    ContactComponent,
    HomeComponent,
    GalleryComponent,
    JumboprintComponent,
    ServicesComponent,
    ShowErrorsComponent,
    PictureComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppService, HeroService, UserService, MessageService, MenuService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
