import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailComponent} from "./email/email.component";
import {InputInvoiceComponent} from "./input-invoice/input-invoice.component";

const routes: Routes = [
    {
        path: 'email',
        component: EmailComponent
    },
    {
        path: 'input-invoice',
        component: InputInvoiceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoiceRoutingModule { }
