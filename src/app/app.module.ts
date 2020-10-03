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
import { CustomHeader } from '../components/custom-header/custom-header';
import { GoogleDriveHandler } from '../providers/googleDriveHandler'
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ProductCard } from 'src/components/product-card/product-card';
import { CustomFooter } from '../components/custom-footer/custom-footer';

@NgModule({
  declarations: [
    AppComponent,
    CategoryButton,
    Dashboard,
    CategoryPage,
    CustomHeader,
    ProductCard,
    CustomFooter
  ],
  entryComponents: [
    CategoryButton,
    Dashboard,
    CategoryPage,
    CustomHeader,
    ProductCard,
    CustomFooter
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // HttpHandler,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleDriveHandler,
    HttpClient
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
