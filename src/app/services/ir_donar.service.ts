import { PuedeDonar } from './../models/puedeDonar';
import { Puntos } from './../models/Puntos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class PuntoService {
    public identity:any;

    url = 'http://localhost:4000/api/donante/';
    constructor(private http: HttpClient) { }

    getPunto(provincia:any):Observable<any>{
            let params = JSON.stringify(provincia);
            let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
            return this.http.post(this.url+'puntos', params, {headers:headers});
        }
    
        puedeDonar(puedeDonar: PuedeDonar):Observable<any>{
            this.identity= localStorage.getItem('identity');
            let idDonante=JSON.parse(this.identity);
            puedeDonar.id_donante=idDonante.user._id;
            puedeDonar.sexo=idDonante.user.sexo;
            
            let params = JSON.stringify(puedeDonar);
            let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
            return this.http.post(this.url+'comprobar', params, {headers:headers});
        }
    }
