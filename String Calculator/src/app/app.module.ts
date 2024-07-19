import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecimalPipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  providers: [DecimalPipe],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
