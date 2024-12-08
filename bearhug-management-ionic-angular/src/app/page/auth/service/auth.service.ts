import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  async register(email: string, password: string) {
    try{
      const response = await fetch('http://localhost:8080/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password})
      });

      return await response.json()
    } catch(err){
      console.log(err);
    }
  }

  async login(username: string, password: string) {
    try{
      const response = await fetch('http://localhost:8080/auth/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: username, password: password})
      });

      return await response.json()
    } catch(err){
      console.log(err as Error);
    }
  }
}
