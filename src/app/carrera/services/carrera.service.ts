import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrera } from '../models/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private apiUrl = "http://localhost:8080/api/carrera";
  constructor(private http:HttpClient) { }


  getCarreras():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.apiUrl);
 }
}
