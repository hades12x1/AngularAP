import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { User } from '../models/auth.models';
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string, rememberMe: boolean): Observable<any> {
      return this.http.post<any>(environment.URL_AUTHENTICATION, { 'rememberMe': rememberMe, 'username': email, 'password': password })
        .pipe(map(res => {
          // login successful if there's a jwt token in the response
          if (res && res.statusResponse.statusCode === 200) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            // Đặt giống biến của ubot portal để redirect về UBot Portal
            localStorage.setItem('authenticationToken', JSON.stringify(res.data.id_token));
            this.currentUserSubject.next(res.data);
          }
          return res;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('authenticationToken');
        this.currentUserSubject.next(null);
    }
}
