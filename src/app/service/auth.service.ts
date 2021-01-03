import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { GlobalVariable } from './globale.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, repeat } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService()


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adresseAPI = GlobalVariable.BASE_API_URL;
  
  public currentUser: Observable<any>;
  public currentUserSubject=new BehaviorSubject(this.valideToken());
  
  
  constructor(private http:HttpClient) { }


 // Handle API errors
 handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a any-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }



  login(addMail: string, mdp: string) {   
        
    let params = {
        "username":addMail,
        "password":mdp
    }

    return this.http.post<any>(this.adresseAPI+'/authenticate', params)
      .pipe(map(resp => {
          localStorage.setItem('token', resp.token);
          this.currentUserSubject.next(resp.token);
          console.log(helper.decodeToken(resp.token))

          return resp;
      }));

  }

  valideToken(){
  
  }
}
