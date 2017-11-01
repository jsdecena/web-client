import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  private headers: any;
  private token;
  private loggedIn: boolean = false;

  constructor(private http: Http) {
    // login service
  }

  public logout() {
    localStorage.clear();
    this.loggedIn = false;
  }

  public authenticate(username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(
        process.env.BASE_URL + '/oauth/token',
        {
            username: `${username}`,
            password: `${password}`,
            grant_type: `password`,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        },
        { headers }
      )
      .map((res) => res.json())
      .map((res) => {
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('refresh_token', res.refresh_token);
          this.loggedIn = true;
      }).catch((err) =>  {
        return Observable.throw(err.json());
      });
  }

  public forgetPassword(username: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(
        process.env.BASE_URL + process.env.API_VERSION + 'password-reset',
        JSON.stringify({email: username}),
        { headers }
      )
      .map((res) => res.json())
      .catch((err) =>  {
        return Observable.throw(err.json());
      });
  }

  public resetPassword(password: string, passwordConfirm, token: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(
        process.env.BASE_URL + process.env.API_VERSION + 'password-reset/' + token,
        JSON.stringify({
          'password': password, 
          'password_confirmation': passwordConfirm
        }),
        { headers }
      )
      .map((res) => res.json())
      .catch((err) =>  {
        return Observable.throw(err.json());
      });
  }  
}
