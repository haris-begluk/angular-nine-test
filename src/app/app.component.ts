import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 9';
  isLoggedIn = false;
  
  constructor(private _authService: AuthService) { 
    this._authService.loginChanged.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }
ngOnInit(){ 
  this._authService.isLoggedIn().then(loggedIn => {
    this.isLoggedIn = loggedIn;
  });
} 
login(){ 
  this._authService.login();
}

}
