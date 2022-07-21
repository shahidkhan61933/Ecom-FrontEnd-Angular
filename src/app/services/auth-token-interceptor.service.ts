import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenInterceptorService implements HttpInterceptor{

  constructor(private authSrv: AuthService, private router :Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const token = this.authSrv.getToken();
    if (token) {
        request = request.clone({
            setHeaders: { Authorization:`Bearer ${token}` }
        });
    }
    return next.handle(request);
}
}
