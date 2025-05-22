import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  imports: [],
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css'
})
export class OpcionesComponent {
  constructor(private router: Router) {}
  navegarAHInico() {
    this.router.navigate(['/h-inico']);
  }

}

