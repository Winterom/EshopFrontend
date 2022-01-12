import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './home/header/header.component';
import {FooterComponent} from './home/footer/footer.component';
import {GeoComponent} from './home/header/geo/geo.component';
import {UserAuthComponent} from './home/header/userauth/user-auth.component';
import {MenucartComponent} from './home/header/menucart/menucart.component';
import {MainpageComponent} from './home/mainpage/mainpage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductcardComponent} from './home/mainpage/productcard/productcard.component';
import {LoginFormComponent} from './home/header/userauth/login-form/login-form.component';
import {RegisterFormComponent} from './home/header/userauth/registr-form/register-form.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserBoardComponent} from './home/header/user-board/user-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GeoComponent,
    UserAuthComponent,
    MenucartComponent,
    MainpageComponent,
    ProductcardComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent,
    UserBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
