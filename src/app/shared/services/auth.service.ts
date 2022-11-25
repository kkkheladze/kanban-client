import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';
import { LoginResponse } from '../../models/http.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public jwt: JwtHelperService) {}

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>(environment.BASE_URL + 'auth/login', {
        email,
        password,
      })
      .pipe(
        tap((res) => this.setSession(res)),
        shareReplay()
      );
  }

  private setSession(authResult: LoginResponse) {
    const decoded = this.jwt.decodeToken(authResult.token);

    const expiresAt = moment().add(authResult.token, 'second');

    localStorage.setItem('access_token', authResult.token);
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('access_token');
    // localStorage.removeItem('expires_at');
  }
  // register(
  //   first_name: string,
  //   last_name: string,
  //   email: string,
  //   password: string
  // ) {
  //   return this.http.post(environment.BASE_URL + 'auth/register', {
  //     first_name,
  //     last_name,
  //     email,
  //     password,
  //   });
  // }
}
