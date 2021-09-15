import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';//,

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { OffresComponent } from './modules/offres/offres.component';
import { ClientsComponent } from './modules/clients/clients.component';
import { UploadComponent } from './modules/upload/upload.component';




@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    ClientsComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
   // HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FormsModule,
    HttpClientModule
    //HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
