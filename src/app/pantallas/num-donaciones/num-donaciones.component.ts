import { DonacionesService } from 'src/app/services/donaciones.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Donaciones } from 'src/app/models/donaciones';

Donaciones
@Component({
  selector: 'app-num-donaciones',
  templateUrl: './num-donaciones.component.html',
  styleUrls: ['./num-donaciones.component.css'],
  providers: [DonacionesService]
})
export class NumDonacionesComponent implements OnInit {
  public donacionesForm: FormGroup;
  public donacion: Donaciones;
  public status:String;
  private arrayDonaciones: Array<Donaciones>=[];

  constructor(private _donacionesService: DonacionesService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,) {
    this.donacionesForm = this.fb.group({
      centro: ['', Validators.required],
      fecha: ['', Validators.required],
    })

    this.donacion = new Donaciones("", "", "");
    this.status="";
  }

  ngOnInit(): void {
    this.mostrarListado();
  }

  onSubmit() {
    this.donacion.centro = this.donacionesForm.get('centro')?.value;
    let fecha= this.donacionesForm.get('fecha')?.value;
    let obtenerfecha= fecha.substring(8,10);
    obtenerfecha+= fecha.substring(4,8);
     obtenerfecha+= fecha.substring(0,4);
    this.donacion.fecha=obtenerfecha;
    this._donacionesService.crearDonacion(this.donacion).subscribe(
			response => {
				if(response){             
          this.mostrarListado(); 
          this.toastr.success("Donación añadida correctamente");    
					this.status = 'success';
          this.donacionesForm.reset();
				}else{
          this.toastr.error(JSON.stringify(response));
					this.status = 'error';
				}
			}

			,error => {
				console.log(<any>error);
			}
		);
	}

  mostrarListado(){
      this._donacionesService.obtenerDonaciones(this.donacion).subscribe(response => {
        console.log(JSON.parse(JSON.stringify(response)));
        console.log(this.arrayDonaciones);
        return this.arrayDonaciones = JSON.parse(JSON.stringify(response));
      })
  }

  borrar(item:any){
    this._donacionesService.borrar(item).subscribe(
      response =>{
        this.toastr.success("Donación eliminada correctamente");
        
      this.mostrarListado();
      },
      error =>{
        console.log(error);
      }
    );
  }
}

