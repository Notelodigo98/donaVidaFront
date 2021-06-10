import { Component, OnInit } from '@angular/core';
import { DonanteService } from 'src/app/services/donante.service';
import { Donante } from 'src/app/models/donante';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [DonanteService],
})
export class InicioComponent implements OnInit {
  inicioForm: FormGroup;
  public donante: Donante;
  public token: any;
  public identity:any;
  public status:string;

  constructor(private _donanteService: DonanteService,
	private _route:ActivatedRoute,
    private fb: FormBuilder,
    private router:Router,
    private toastr:ToastrService,
  ) {
	  this.donante=new Donante("","","","","","");
	  this.status="";
      this.inicioForm = this.fb.group({
      contrasenia: ['', Validators.required],
      nombre: ['', Validators.required]
    })
  }

  ngOnInit(): void {
	console.log('Componente de Inicio cargado...');
  }

  onSubmit(){
		// loguear al usuario y conseguir sus datos
		this.donante.contrasenia = this.inicioForm.get('contrasenia')?.value;
		this.donante.nombre = this.inicioForm.get('nombre')?.value;
		
		this._donanteService.signin(this.donante).subscribe(
			response => {
				this.identity = response;

				if(!this.identity|| !this.identity.user){
					this.toastr.error(JSON.stringify(response.message));
					this.status = 'error';
					this.inicioForm.reset();
				}else{
					this.toastr.success("Usuario correcto");
					this.status='success';
					//PERSISTIR DATOS DEL USUARIO
					localStorage.setItem('identity', JSON.stringify(this.identity));

					// Conseguir el token
					this.getToken();
				}
				
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);

				if(errorMessage != null){
					this.status = 'error';
				}
			}
		);
	}


	getToken(){
		this._donanteService.signin(this.donante, 'true').subscribe(
			response => {
				this.token = response.token;
				
				console.log(this.token);



				if(this.token.length <= 0){
					this.status = 'error';
				}else{
					
					// PERSISTIR TOKEN DEL USUARIO
					localStorage.setItem('token',this.token);
					this.router.navigate(['/analisis']);
				}
				
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);

				if(errorMessage != null){
					this.status = 'error';
				}
			}
		);
	}


}
