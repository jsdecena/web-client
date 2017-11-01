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
    selector: 'booking-form',
    templateUrl: './booking-form.component.html',
    styles: [`
      .booking-form {
        position: absolute;
        bottom: 115px;
        width: 100%;
        /* Set the fixed height of the footer here */
        background-color: #efedee;
        z-index: 1;
        padding: 40px 0 80px 0;
      }
      .booking-form .col-md-2 {
        padding: 0 0 0 10px;
      }
      .booking-form select,
      .booking-form input {
        border: 2px solid #377edc;
      }
      .form-submit-btn {
        margin-top: 20px;
      }
      .booking-form p {
        padding-top: 10px;
      }
      .booking-form a.options {
        display:block;
        margin-top: 15px;
        color: #377edc;
      }
      .booking-form button {
        background-color: #377edc;
      }
    `]
  })
  export class BookingFormComponent implements OnInit {
    public options: boolean = false;

    public ngOnInit() {
      console.log('hello `Booking Form` component');
    }

    public onToggleOptions() {
      this.options = !this.options;
    }
  }
  