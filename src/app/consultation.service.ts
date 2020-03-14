import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from './Model/Consultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  public host:String="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  public SaveConsultation(url, data):Observable<Consultation>{
    return this.httpClient.post<Consultation>(url,data);
  }
}
