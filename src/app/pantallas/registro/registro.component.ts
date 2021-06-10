import { Component, OnInit } from '@angular/core';
import { DonanteService } from 'src/app/services/donante.service';
import { Donante } from 'src/app/models/donante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [DonanteService]
})
export class RegistroComponent implements OnInit {
  public donanteForm: FormGroup;
  public donante: Donante;
	public status: string;

  constructor(private _donanteService: DonanteService,
    private fb: FormBuilder,
    private router:Router,
    private toastr:ToastrService,
  ) {
    this.donanteForm = this.fb.group({
      dni: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required],
      contrasenia: ['', Validators.required],
      grupo: ['', Validators.required],
      nombre: ['', Validators.required],
    })
    this.donante = new Donante("","","","","","");
    this.status="";
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.donante.dni = this.donanteForm.get('dni')?.value;
    this.donante.sexo = this.donanteForm.get('sexo')?.value;
    this.donante.telefono = this.donanteForm.get('telefono')?.value;
    this.donante.contrasenia = this.donanteForm.get('contrasenia')?.value;
    this.donante.grupo = this.donanteForm.get('grupo')?.value;
    this.donante.nombre = this.donanteForm.get('nombre')?.value;

		this._donanteService.registro(this.donante).subscribe(
			response => {

				if(response.user && response.user._id){
					this.status = 'success';
          this.toastr.success("Usuario registrado correctamente");
					this.donanteForm.reset();
				}else{
          this.toastr.error(JSON.stringify(response.message));
					this.status = 'error';
				}
			},
      
			error => {
				console.log(<any>error);
			}
		);
	}
}
