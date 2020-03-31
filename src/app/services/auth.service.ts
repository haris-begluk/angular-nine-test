import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _UserManager: UserManager;
  private _user: User;
  private _loginChangedSubject = new Subject<boolean>();
  loginChanged = this._loginChangedSubject.asObservable();

  constructor(private _httpClient: HttpClient) {
    const stsSettings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}signin-callback`,
      response_type: 'code',
      scope: 'openid profile projects-api',
      post_logout_redirect_uri: `${Constants.clientRoot}signout-callback`
    };
    this._UserManager = new UserManager(stsSettings);
  }

  login() {
    return this._UserManager.signinRedirect();
  } 
  logout(){
    this._UserManager.signoutRedirect();
  }
  isLoggedIn(): Promise<boolean> {
    return this._UserManager.getUser().then(user => {
      const userCurrent = !!user && !user.expired;
      if(this._user !== user){
        this._loginChangedSubject.next(userCurrent);
      }
      this._user = user;
      return userCurrent;
    });
  } 
  completeLogin(){
    return this._UserManager.signinRedirectCallback().then(user => {
      this._user = user; 
      this._loginChangedSubject.next(!!user && !user.expired); 
      return user;
    });
  } 
  completeLogout(){ 
    this._user = null;
    return this._UserManager.signoutRedirectCallback();
  }
}
