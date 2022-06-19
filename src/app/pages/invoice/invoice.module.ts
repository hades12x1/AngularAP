import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvoiceRoutingModule} from "./invoice-routing.module";
import { EmailComponent } from './email/email.component';
import { InputInvoiceComponent } from './input-invoice/input-invoice.component';



@NgModule({
  declarations: [
    EmailComponent,
    InputInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
