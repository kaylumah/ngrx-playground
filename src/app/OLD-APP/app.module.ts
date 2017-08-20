import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { CustomComponent } from './custom/custom.component';


@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
