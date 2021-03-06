import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService] },
  { path: 'cards', component: CardsListComponent, canActivate:[RouteGuardService] },
  { path: 'card/:id', component: CardComponent, canActivate:[RouteGuardService] },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
