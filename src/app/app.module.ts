import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    HttpClientModule,
    BrowserModule, 
    RouterModule, 
    BrowserAnimationsModule,
    MatToolbarModule,MatMenuModule,MatSliderModule,MatButtonModule,
    AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
