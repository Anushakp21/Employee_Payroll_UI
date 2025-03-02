import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  
  private baseUrl: string = "http://localhost:8086/";

  constructor(private httpClient: HttpClient) {

  }

  getEmployeeData(): Observable<any> {
    return this.httpClient.get("http://localhost:8086");
  }

  getEmployeeById(id : number): Observable<any> {
    return this.httpClient.get(this.baseUrl + `${id}`);
  }

  addEmployee(body: any): Observable<any> {
    console.log(body)
    return this.httpClient.post(this.baseUrl + "insert", body);
  }

  deleteEmployeeData(id: number): Observable<any> {
    console.log(id)
    return this.httpClient.delete(this.baseUrl + `${id}`,{responseType:'text'});
  }

  updateEmployeData(id: number, body: any): Observable<any> {
    console.log(body)
    return this.httpClient.put(this.baseUrl + `${id}`, body);
  }
}
