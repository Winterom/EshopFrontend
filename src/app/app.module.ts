import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { GeoComponent } from './home/header/geo/geo.component';
import { UserauthComponent } from './home/header/userauth/userauth.component';
import { MenucartComponent } from './home/header/menucart/menucart.component';
import { MainpageComponent } from './home/mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductcardComponent } from './home/mainpage/productcard/productcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GeoComponent,
    UserauthComponent,
    MenucartComponent,
    MainpageComponent,
    ProductcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
