import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {FirebaseService} from './firebase.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home/home.component';
import { NavbarComponent } from './components/Navbar/navbar/navbar.component';
import { CartComponent } from './components/Cart/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule, RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'cart', component: CartComponent}// Home component is called on root URL

    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [FirebaseService, AngularFireModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
