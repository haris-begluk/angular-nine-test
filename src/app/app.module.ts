import { FirstComponent } from './components/home/first/first.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './../app-routing/app-routing.module';
import { AuthorizationModule } from './../authorization/authorization.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FirstComponent],
  imports: [BrowserModule, AuthorizationModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
