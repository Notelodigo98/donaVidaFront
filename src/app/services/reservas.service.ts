import { Reservas } from './../models/reservas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class ReservasService {
    url = 'http://localhost:4000/api/donante/';
    constructor(private http: HttpClient) { }

    getReservas(reservas:Reservas):Observable<any>{
            let params = JSON.stringify(reservas);
            let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
            return this.http.post(this.url+'reservas', params, {headers:headers});
        }
    }
