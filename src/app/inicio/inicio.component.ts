import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true, // <-- ¡Esto es clave en proyectos standalone!
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'] // <-- arreglado: debe ir en plural
})
export class InicioComponent {}
