import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
import { Router } from '@angular/router';
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
  styles: [],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
   template: ''
})
export class LogOutComponent implements OnInit {
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
    this.loginService
    .logout();

    this.router.navigate(['/login']);
  }
}
