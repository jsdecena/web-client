/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import 'jquery';
import 'bootstrap/js/tooltip';
declare var $: any;
/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    './app.component.css'
  ],
  template: `
    <main>
      <header></header>
      <router-outlet></router-outlet>
      <myfooter></myfooter>  
    </main>
  `
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    //
  }

  public ngAfterViewInit() {
      ($('[data-toggle="tooltip"]') as any).tooltip();
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
