import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASEURL ="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  public register(user:any) {
    return this.httpClient.post(`${this.BASEURL}/api/users/register`,user);
  }

  public login(user:any) {
    return this.httpClient.post(`${this.BASEURL}/authenticate`,user);
  }

  public islogin():boolean {
    return localStorage.getItem('XTOKEN') != null ? true : false;
  }
  public getToken():any{
    return localStorage.getItem('XTOKEN');
  }
  public logout():any {
    localStorage.clear();
  }
}
