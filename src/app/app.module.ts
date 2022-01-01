import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { GeoComponent } from './home/header/geo/geo.component';
import { UserAuthComponent } from './home/header/userauth/user-auth.component';
import { MenucartComponent } from './home/header/menucart/menucart.component';
import { MainpageComponent } from './home/mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductcardComponent } from './home/mainpage/productcard/productcard.component';
import { LoginFormComponent } from './home/header/userauth/login-form/login-form.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { RegistrFormComponent } from './home/header/userauth/registr-form/registr-form.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { authInterceptorProviders } from './_helpers/auth.interceptor';
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
    RegistrFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
