import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CategoryButton } from '../components/category-button/category-button';
import { Dashboard } from '../pages/dashboard/dashboard';
import { CategoryPage } from "../pages/category-page/category-page";
import { CustomHeader } from './custom-header/custom-header'

@NgModule({
  declarations: [
    AppComponent,
    CategoryButton,
    Dashboard,
    CategoryPage,
    CustomHeader
  ],
  entryComponents: [
    CategoryButton,
    Dashboard,
    CategoryPage,
    CustomHeader
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
