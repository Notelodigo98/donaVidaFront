export class Donaciones{
    centro:string;
    fecha:String;
    id_donante:String;
  

    constructor(centro:string,fecha:string, id_donante:String){
    this.centro = centro;
    this.fecha = fecha;
    this.id_donante = id_donante;
    }
}