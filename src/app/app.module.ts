import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { CalculatorModule } from './controllers/calculator/calculator.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NavbarModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
