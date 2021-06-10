import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalisisComponent } from './pantallas/analisis/analisis.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { RegistroComponent } from './pantallas/registro/registro.component';
import { IrDonarComponent } from './pantallas/ir-donar/ir-donar.component';
import { NumDonacionesComponent } from './pantallas/num-donaciones/num-donaciones.component';
import { ReservasComponent } from './pantallas/reservas/reservas.component';
import { AyudaAplicacionComponent } from './pantallas/ayuda-aplicacion/ayuda-aplicacion.component';

const routes: Routes = [
  {
    path:'analisis',
    component:AnalisisComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },  
  {
    path:'ir_donar',
    component:IrDonarComponent
  }, 
  {
    path:'num_donaciones',
    component:NumDonacionesComponent
  }  
  , 
  {
    path:'',
    component:ReservasComponent
  },  
  {
    path:'ayuda',
    component:AyudaAplicacionComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
