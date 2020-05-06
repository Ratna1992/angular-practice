import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';
import { SmartPhone } from '../interfaces/SmartPhone';
import { Observable } from 'rxjs';

const getSmartPhones = 'http://localhost:8080/getSmartPhonesList';
const postSmartPhones='http://localhost:8080/saveSmartPhone';
const putSmartPhones='http://localhost:8080/updateSmartPhone';
const deleteSmartPhones='http://localhost:8080/deleteSmartPhone';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
    
  }

  //get API
  getSmartphonesList(): Observable<SmartPhone[]> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*");
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get<SmartPhone[]>(getSmartPhones,{headers:headers});
  }

  //post API

  saveSmartPhones(smartPhone:SmartPhone): Observable<SmartPhone[]> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*");
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post<SmartPhone[]>(postSmartPhones,smartPhone,{headers:headers});
  }

//put API

  updateSmartPhones(id:string,price:string): Observable<SmartPhone> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*");
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    let body = new HttpParams();
    body = body.set('id', id);
    body = body.set('price', price);
    return this.httpClient.put<SmartPhone>(postSmartPhones,body,{headers:headers});
  }

  //put API

  deleteSmartPhones(id:string): Observable<SmartPhone[]> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*");
    headers = headers.append('Content-Type', 'application/json; charset=utf-8');
    let body = new HttpParams();
    body = body.set('id', id);
    const httpOptions = {
    headers: headers,
    params: body
};
    return this.httpClient.delete<SmartPhone[]>(deleteSmartPhones,httpOptions);
  }


}
