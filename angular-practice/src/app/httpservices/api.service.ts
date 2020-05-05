import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { SmartPhone } from '../interfaces/SmartPhone';
import { Observable } from 'rxjs';

const getSmartPhones = 'http://localhost:8080/getSmartPhonesList';
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





}
