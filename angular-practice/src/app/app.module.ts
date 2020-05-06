import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';//added http module
import { AppComponent } from './app.component';
import { SmartPhoneComponent } from './components/smart-phone/smart-phone.component'
import { AppRoutingModule } from './app-routing.module'
import { ErrorIntercept } from '../app/errorhandler/error.interceptor'
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SmartPhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    //global error handling with interceptors
    {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorIntercept,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
