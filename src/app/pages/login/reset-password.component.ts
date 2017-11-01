import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  // selector: 'login-box',  // <login-box></login-box>
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
   templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {
  public error: any = false;
  public message: any = false;
  public loading: boolean = false;
  public sub: any;
  public token: string;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    private router: Router,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        let token = params['token'];
        this.token = token;
      });
  }

  public onResetPassword(form: NgForm) {
    this.loading = true;
    this.loginService
    .resetPassword(form.value.password, form.value.passwordConfirm, this.token)
    .subscribe(
      (res) => {
        console.log(res);
        this.message = res.message;
        this.loading = false;
        this.error = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
        if (error.password) {
            this.error = error.error.password    
        }
        this.error = error.error;
      }
    );
  }
}
