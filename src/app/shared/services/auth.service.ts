import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs';
import { LoginResponse } from '../models/http.interface';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public jwt: JwtHelperService) {}

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>('api/v1/auth/login', {
        email,
        password,
      })
      .pipe(
        tap((res) => this.setSession(res)),
        shareReplay()
      );
  }

  register(
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) {
    return this.http
      .post<LoginResponse>('api/v1/auth/register', {
        first_name,
        last_name,
        email,
        password,
      })
      .pipe(tap((res) => this.setSession(res)));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
  }

  private setSession(authResult: LoginResponse) {
    const decoded = this.jwt.decodeToken(authResult.token);

    localStorage.setItem('access_token', authResult.token);
    localStorage.setItem('expires_at', decoded.exp);
  }

  public isLoggedIn() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) return;
    const isExpired = this.jwt.isTokenExpired(accessToken);
    return !isExpired;
  }
}
