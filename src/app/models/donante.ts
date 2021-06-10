export class Donante{
    dni:string;
    sexo:String;
    telefono:String;
    contrasenia:string;
    grupo:string;
    nombre:string;

    constructor(dni:string,sexo:string, telefono:String, contrasenia:string,grupo:string, nombre:string){
    this.dni = dni;
    this.sexo = sexo;
    this.contrasenia = contrasenia;
    this.telefono = telefono;
    this.grupo = grupo;
    this.nombre = nombre;
    }
}