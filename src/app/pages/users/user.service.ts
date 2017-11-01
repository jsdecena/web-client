import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  
  public isLoggedIn: boolean = false;

  constructor( private http: Http, private router: Router ) {
      this.isLoggedIn = !!localStorage.getItem('token');
      if (this.isLoggedIn === false) {
        this.router.navigate(['/login']);
      }
  }

  public findDetails() {
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    return this.http
      .get(
        process.env.BASE_URL + process.env.API_VERSION + 'admin/users/' + 1,
        { headers }
      )
      .map((res) => res.json())
      .catch((err) =>  {
        return Observable.throw(err.json());
      });      
  }
}
