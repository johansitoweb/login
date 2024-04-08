import { Injectable } from '@angular/core';
// import { ILogin } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout(): void {
    localStorage.removeItem('token');
  } 


  logoutva(){
    localStorage.setItem('isLoggedIn', "false");
  }

}