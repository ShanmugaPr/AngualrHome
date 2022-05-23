import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DietforComponent } from './dietfor/dietfor.component';
import { BoxComponent } from './box/box.component';
import { SuccessComponent } from './success/success.component';
import { HowComponent } from './how/how.component';
import { FooterComponent } from './footer/footer.component';
import { NavcontextComponent } from './navcontext/navcontext.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    DietforComponent,
    BoxComponent,
    SuccessComponent,
    HowComponent,
    FooterComponent,
    NavcontextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
