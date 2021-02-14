import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

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
import { CategoryList } from 'src/components/category-list/category-list';
import { ProductCategories } from 'src/providers/product-categories';
import { ProductPage } from 'src/pages/product-page/product-page';
import { CartModal } from 'src/modals/cart-modal/cart-modal';
import { CartHandler } from 'src/providers/cart-handler';
import { OrderModal } from 'src/modals/order-modal/order-modal';
import { CtaButton } from 'src/components/cta-button/cta-button';
import { OrderByEmailHandler } from 'src/providers/order-by-email-handler';
import { FormsModule } from '@angular/forms';
import { ModalHandler } from 'src/providers/modal-handler';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CategoryButton,
    Dashboard,
    CategoryPage,
    CustomHeader,
    ProductCard,
    CustomFooter,
    CategoryList,
    ProductPage,
    CartModal,
    OrderModal,
    CtaButton
  ],
  entryComponents: [
    // CategoryButton,
    // Dashboard,
    // CategoryPage,
    // CustomHeader,
    // ProductCard,
    // CustomFooter
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    // HttpHandler,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleDriveHandler,
    HttpClient,
    ProductCategories,
    CartHandler,
    OrderByEmailHandler,
    EmailComposer,
    ModalHandler,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
