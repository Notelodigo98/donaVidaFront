import { Reservas } from './../../models/reservas';
import { ReservasService } from './../../services/reservas.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-reservas',
	templateUrl: './reservas.component.html',
	styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
	public grupo: string = 'A+';
	public imagenes: String[] = ["assets/img/reservas/corabase1.png", "assets/img/reservas/corabase2.png", "assets/img/reservas/corabase3.png", "assets/img/reservas/corabase4.png"];
	public reservas: Reservas;
	public imagenReserva: String = "";
	public identity:boolean=false;

	constructor(private _reservasService: ReservasService) {
		this.reservas = new Reservas("A+");
	}

	ngOnInit(): void {
		this._reservasService.getReservas(this.reservas).subscribe(
			response => {
				this.imagenReserva = this.imagenes[response.ReservasModel.cant];
				
			},

			error => {
				console.log(<any>error);
			}
		);

		if(localStorage.getItem('identity')){
			this.identity=true;
		}else{
			this.identity=false;
		}
	}

	llamarGrupo(grupo: any) {
		this.grupo = grupo;
		this.reservas = new Reservas(grupo);

		this._reservasService.getReservas(this.reservas).subscribe(
			response => {
				this.imagenReserva = this.imagenes[response.ReservasModel.cant];
			},

			error => {
				console.log(<any>error);
			}
		);
	}



}
