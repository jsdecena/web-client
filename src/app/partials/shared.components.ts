import {
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { ErrorComponent } from './errors';
import { BookingFormComponent } from './booking/booking-form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ErrorComponent,
        BookingFormComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ErrorComponent,
        BookingFormComponent
    ]
})
export class SharedComponent {}
