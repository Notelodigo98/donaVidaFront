import { DonanteService } from 'src/app/services/donante.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DonanteService]
})
export class AppComponent {

  public title: String;
  public identity:any;

  constructor(
    private _donanteService:DonanteService,
  ){
    this.title = "Dona Vida";
}


  ngOnInit(){
    this.identity=this._donanteService.getIdentity();
    console.log(this.identity);
  }
}
