export class Analisis{
    fecha:String;
    id_donante:String;
    ruta:string;

    constructor(ruta:string,fecha:string, id_donante:String){
    this.ruta = ruta;
    this.fecha = fecha;
    this.id_donante = id_donante;
    }
}