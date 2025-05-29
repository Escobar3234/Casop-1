import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; 
import { OpcionesComponent } from './opciones/opciones.component';
import { HInicoComponent } from './h-inico/h-inico.component';
import { NotasComponent } from './notas/notas.component';
import { HabitosComponent } from './habitos/habitos.component';
import { FrecuenciaComponent } from './frecuencia/frecuencia.component';
import { NotasVistaComponent } from './notas-vista/notas-vista.component';
import { NuevaNotaComponent } from './nueva-nota/nueva-nota.component';


export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'opciones', component: OpcionesComponent },
  {path: 'h-inico', component: HInicoComponent},
  {path: 'habitos/:fecha', component: HabitosComponent},
  {path: 'notas/:fecha', component: HabitosComponent},
  { path: 'frecuencia', component: FrecuenciaComponent },
  { path: 'notas-vista', component: NotasVistaComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'nueva-nota', component: NuevaNotaComponent}

];
