import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {User} from "../shared/interfaces/authentication";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'allow',
    })
  };
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  myProfile(uuid = 'fa6e0f6a-ee9d-4c63-ad97-d447838a47c6'): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/v1.0/users/${uuid}`)
      .pipe(
        tap((profile: User) => {
          console.log(profile);
          return profile;
        }), catchError((err => throwError('Couldnot find valid user, please sign up before signing in')))
      );
  }
}
