import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Error } from '../../partials/errors/error';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'login-box',  // <login-box></login-box>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    LoginService
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styles: [
    `
      .login-submit {
        padding: 15px; 0
      }
      .login-form input[type="text"],
      .login-form input[type="email"],
      .login-form input[type="password"] {
        height: 45px;
      }
      .login-form {
        margin-top: 120px;
        padding: 40px;
        background-image: url('/assets/img/bg.png');
      }
      .login-form,
      .login-form a,
      .login-form label {
        color: #fff;
      }
      .login-form-body {
        background: none;
      }
      .forgot-password {
        padding: 10px 0 0;
      }
    `
  ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public error: Error[];
  public loading: boolean = false;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    private router: Router,
    private loginService: LoginService
  ) {}

  public ngOnInit() {
    console.log('login page loaded!');
  }

  public login(form: NgForm) {
    this.loading = true;
    this.loginService
    .authenticate(form.value.email, form.value.password)
    .subscribe(
      (res) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.error = error;
      }
    );
  }
}
