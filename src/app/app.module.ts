import { FeedService } from './services/feed.service';
import { AdService } from './services/ad.service';
import { AdDirective } from './shared/ad.directive';
import { HeroProfileComponent } from './ad-banner/hero-profile.component';
import { HeroJobAdComponent } from './ad-banner/hero-job-ad.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { ProductModule } from './product/product.module';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { RoleGuard } from './guards/role-guard.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { GooglePlacesDirective } from './google-places.directive';
import { UsersService } from './services/users.ervice';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UserslistComponent } from './userslist/userslist.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
// import { CcLogoDirective } from './cc-logo.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderNavComponent,
    ContactComponent,
    OrderComponent,
    LoginComponent,
    PageNotFoundComponent,
    EventsComponent,
    EventDetailsComponent,
    GooglePlacesDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    GalleryComponent,
    TodolistComponent,
    UserslistComponent,
    PostFeedComponent
    // CcLogoDirective,
  ],
  entryComponents: [HeroJobAdComponent,HeroProfileComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    UsersService,
    AdService,
    FeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
