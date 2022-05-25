import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IUser} from "../models/user";
import {TokenFireBase} from "../models/token";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: IUser): Observable<TokenFireBase> {
    user.returnSecureToken = true;
    return this.http.post<TokenFireBase>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        map( response => response),
        tap(this.setToken),
      )
  }

  public setToken(response: TokenFireBase) {
    console.log(response);
/*    if (response) {
      localStorage.setItem('token', response.token);

    } else {
      localStorage.clear();
    }*/
  }

}
