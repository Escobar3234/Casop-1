import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { HInicoComponent } from './h-inico/h-inico.component';
import { NotasComponent } from './notas/notas.component';
import { HabitosComponent } from './habitos/habitos.component';
import { FrecuenciaComponent } from './frecuencia/frecuencia.component';
import { NotasVistaComponent } from './notas-vista/notas-vista.component';
import { NuevaNotaComponent } from './nueva-nota/nueva-nota.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    OpcionesComponent,
    HInicoComponent,
    NotasComponent, 
    HabitosComponent,
    FrecuenciaComponent,
    NotasVistaComponent,
    NuevaNotaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'opciones', component: OpcionesComponent },
      { path: 'h-inico', component: HInicoComponent },
      { path: 'notas/:fecha', component: NotasComponent },
      { path: 'habitos/:fecha', component: HabitosComponent },
      { path: 'frecuencia', component: FrecuenciaComponent }, 
      { path: 'notas-vista', component: NotasVistaComponent },
      { path: 'nueva-nota', component: NuevaNotaComponent},
      
    ])
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // <-- Esto permite usar los tags de Ionic
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
