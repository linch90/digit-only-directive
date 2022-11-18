import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DigitOnlyDirectiveModule } from '@linch90/digit-only-directive';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DigitOnlyDirectiveModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
