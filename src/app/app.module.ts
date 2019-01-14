import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuBarComponent,
    FooterBarComponent,
    LoginComponent,
    ErrorComponent,
    CardsListComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
