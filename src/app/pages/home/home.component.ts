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
  // selector: 'login-box',  // <login-box></login-box>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styles: [`
    section.headline h1 small,
    section.headline h1 {
      color: #fff;
    }
    section.headline h1 {
      line-height: 1.3;
      font-size: 46px;
    }
    section.headline h1 small {
      display: block;
      line-height: 1.2;
      font-size: 24px;
      padding-top: 40px;
      font-weight: 200;
    }
  `],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    private router: Router,
  ) {}

  public ngOnInit() {
    console.log('homepage loaded');
  }
}
