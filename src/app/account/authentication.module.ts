import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";
import {CarouselModule} from "ngx-owl-carousel-o";
import {LoginComponent} from "./login/login.component";
import {AuthenticationRoutingModule} from "./authentication-routing.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAlertModule,
    CarouselModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
