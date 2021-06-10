import { Donante } from './../models/donante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DonanteService {
    public token: any;
	public identity:any;

    url = 'http://localhost:4000/api/donante/';
    constructor(private http: HttpClient) { }

    signin(donante:any, gettoken:any=null): Observable<any>{
		if(gettoken != null){
			donante.gettoken = gettoken;
		}

		let params = JSON.stringify(donante);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this.http.post(this.url+'entrar', params, {headers: headers});
	}

    getToken(){
		let token = localStorage.getItem('token');

		if(token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;
	}

	getIdentity(){
		//esto antes lo parseaba y no se por que
		let identity =localStorage.getItem('identity');

		if(identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

	registro(donante: Donante): Observable<any>{
		let params = JSON.stringify(donante);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.post(this.url+'registro', params, {headers:headers});
	}
}