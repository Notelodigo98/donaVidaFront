import { PuedeDonar } from './../../models/puedeDonar';
import { PuntoService } from './../../services/ir_donar.service';
import { Puntos } from './../../models/Puntos';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ir-donar',
  templateUrl: './ir-donar.component.html',
  styleUrls: ['./ir-donar.component.css'],
  providers: [PuntoService]
})
export class IrDonarComponent implements OnInit {
  public punto: Puntos;
  private arrayPuntos: Array<Puntos> = [];
  private provincia: any = "default";
  private puede: PuedeDonar;

  constructor(private _puntoService: PuntoService, private toastr: ToastrService) {
    this.punto = new Puntos("", "", "", "");
    this.puede = new PuedeDonar("", "");
  }

  ngOnInit(): void {
    this.puedeDonar();
  }

  obtenerPuntos(provincia: any) {
    this.punto.provincia = provincia;
    this._puntoService.getPunto(this.punto).subscribe(response => {
      console.log(JSON.parse(JSON.stringify(response)));
      return this.arrayPuntos = JSON.parse(JSON.stringify(response));
    })
  }

  puedeDonar() {
    this._puntoService.puedeDonar(this.puede).subscribe(response =>{
      this.toastr.info(JSON.stringify(response.message));
    })
  }
}
