import { Component, OnInit } from '@angular/core';
import { Analisis } from 'src/app/models/analisis';
import { AnaliticasService } from 'src/app/services/analiticas.service';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css'],
  providers:[AnaliticasService]
})
export class AnalisisComponent implements OnInit {
  private analiticas:Analisis;
  private arrayAnalisis: Array<Analisis>=[];

  constructor(private _analisisService: AnaliticasService) { 
    this.analiticas=new Analisis("","","");
  }

  ngOnInit(): void {
   this.obtenerAnaliticas();
  } 

  obtenerAnaliticas(){
    this._analisisService.obtenerAnaliticas(this.analiticas).subscribe(response => {
      console.log(JSON.parse(JSON.stringify(response)));
      return this.arrayAnalisis = JSON.parse(JSON.stringify(response));
    })
  }

  ver(ruta:any){
    window.open(ruta,'_blank');
  }
}
