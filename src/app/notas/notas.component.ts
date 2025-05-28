import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  notas: any[] = [];

  ngOnInit(): void {
    const notasGuardadas = localStorage.getItem('notas');
    if (notasGuardadas) {
      this.notas = JSON.parse(notasGuardadas);
    }
  }
  constructor(private router: Router) {}
  irAInicio() {
    this.router.navigate(['/h-inico']); // Ajusta la ruta si es diferente
  }
}