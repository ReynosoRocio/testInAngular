import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BusquedaTweetsComponent } from './components/busqueda-tweets/busqueda-tweets.component';

import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BusquedaTweetsComponent,
  ],
  imports: [
    BrowserModule,
  FormsModule,
  AppRoutingModule,
  RecaptchaModule,
  RecaptchaFormsModule,
  NgbModule,
  CommonModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot(),
  HttpClientModule,
  RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'tweets', component: BusquedaTweetsComponent},    
    {path: 'notFound', component: PageNotFoundComponentComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', redirectTo: 'notFound', pathMatch: 'full' },
  ]),
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,

      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
