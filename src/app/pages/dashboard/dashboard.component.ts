import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../app.service';
import { Router } from '@angular/router';
import { UserService } from '../../pages/users/user.service';
import { User } from '../../pages/users/user';

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
  providers: [
    UserService
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './dashboard.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public user: User;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    private userService: UserService,
    private router: Router
  ) {
    console.log('dashboard');
  }

  public ngOnInit() {
    this.userService
    .findDetails()
    .subscribe((res) => {
      this.user = res.data;
      // console.log(this.user.name);
    });
  }
}
