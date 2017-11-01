import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  // selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  public user;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    private router: Router
  ) {
    console.log('users');
  }

  public ngOnInit() {

  }
}
