import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel esta aquí

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- Importa el FormsModule antes del enlace con [{ngModel}]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
