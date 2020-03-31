import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout-redirect-callback',
  template: `<div></div>` 
})
export class SignoutRedirectCallbackComponent implements OnInit {

  constructor(private _authService:AuthService, private router:Router ) { }

  ngOnInit() { 
    this._authService.completeLogout().then(_ => {
      this.router.navigate(['/'], {replaceUrl: true});
    });
  }

}
