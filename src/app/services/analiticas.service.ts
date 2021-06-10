import { Analisis } from './../models/analisis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class AnaliticasService {
	public identity:any;

    url = 'http://localhost:4000/api/donante/';
    constructor(private http: HttpClient) { }

    obtenerAnaliticas(analisis: Analisis){
        this.identity= localStorage.getItem('identity');
        let idDonante=JSON.parse(this.identity);
        analisis.id_donante=idDonante.user._id;
        
        let params = JSON.stringify(analisis);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.post(this.url+'analiticas', params, {headers:headers});
    }
}