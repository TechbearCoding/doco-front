import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { model } from './contract-model';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private REST_API_SERVER = "http://localhost:8080/v1/fill";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  public postData(data: model){
    this.httpClient.post<any>(this.REST_API_SERVER, data).subscribe(data => {
      console.log(data);
  });

  }

}
