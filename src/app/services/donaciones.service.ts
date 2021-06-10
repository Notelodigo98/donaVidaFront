import { Donaciones } from './../models/donaciones';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class DonacionesService {
	public identity:any;

    url = 'http://localhost:4000/api/donante/';
    constructor(private http: HttpClient) { }

    crearDonacion(donacion: Donaciones){
        this.identity= localStorage.getItem('identity');
        let idDonante=JSON.parse(this.identity);
        donacion.id_donante=idDonante.user._id;
        
        let params = JSON.stringify(donacion);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.post(this.url+'donaciones', params, {headers:headers});
    }

    obtenerDonaciones(donacion: Donaciones){
        this.identity= localStorage.getItem('identity');
        let idDonante=JSON.parse(this.identity);
        donacion.id_donante=idDonante.user._id;
        
        let params = JSON.stringify(donacion);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.post(this.url+'obtenerdonacion', params, {headers:headers});
    }

    borrar(item:any){
    
        let params = JSON.stringify(item);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.post(this.url+'eliminarDonacion', params, {headers:headers});
    }
}
