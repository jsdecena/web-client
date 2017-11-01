import {
  Component,
  OnInit,
} from '@angular/core';
/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'myfooter',
  templateUrl: './footer.component.html',
  styles: [
    `
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      /* Set the fixed height of the footer here */
      height: 115px;
      background-color: #377edc;
    }
    .footer,
    .footer a {
      color: #fff;
    }
    .footer a:hover {
      color: #ddd;
    }
    .footer-top {
      padding: 20px 0;
      min-height: 30px;
    }
    .footer-top li,
    .footer-top li a {
      padding-left: 10px;
    }
    .footer-bottom {
      background: #00419b;
    }
    .footer-bottom p {
      padding: 20px 0 0;
    }
    .footer-bottom p a {
      margin-top: -10px;
      background: #444;
      color: #eee;
      border: 1px solid #434343;
      border-radius: 15px;
      moz-border-radius: 15px;
      webkit-border-radius: 15px;
    }    
    `
  ]
})
export class FooterComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Footer` component');
  }

}
