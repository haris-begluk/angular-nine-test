import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-redirect-callback', 
  template: `<div></div>`
  
})
export class SigninRedirectCallbackComponent implements OnInit {

  constructor(private _authService: AuthService, private _router:Router ) { }

  ngOnInit() {
    this._authService.completeLogin().then(user=> {
        this._router.navigate(['/'], {replaceUrl:true});
    });
  }

}
