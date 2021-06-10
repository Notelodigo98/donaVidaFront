import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservasComponent } from './pantallas/reservas/reservas.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { RegistroComponent } from './pantallas/registro/registro.component';
import { AnalisisComponent } from './pantallas/analisis/analisis.component';
import { NumDonacionesComponent } from './pantallas/num-donaciones/num-donaciones.component';
import { IrDonarComponent } from './pantallas/ir-donar/ir-donar.component';
import { MenuComponent } from './componentes-comunes/menu/menu.component';
import { PieComponent } from './componentes-comunes/pie/pie.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{ HttpClientModule} from '@angular/common/http';
import { ToastrModule} from 'ngx-toastr';
import { AyudaAplicacionComponent } from './pantallas/ayuda-aplicacion/ayuda-aplicacion.component';
@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    InicioComponent,
    RegistroComponent,
    AnalisisComponent,
    NumDonacionesComponent,
    IrDonarComponent,
    MenuComponent,
    PieComponent,
    AyudaAplicacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
