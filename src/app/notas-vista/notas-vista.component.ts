import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-notas-vista',
  templateUrl: './notas-vista.component.html',
  styleUrls: ['./notas-vista.component.css']
})
export class NotasVistaComponent {
  notas: any[] = [];
  categorias: string[] = ['Trabajos', 'Salud', 'Personal'];
  categoriaSeleccionada: string = 'Trabajos';

  constructor(private router: Router) {
    const notasGuardadas = localStorage.getItem('notas');
    if (notasGuardadas) {
      this.notas = JSON.parse(notasGuardadas);
    }
  }

  notasFiltradas() {
    return this.notas.filter(n => n.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  editarNota(index: number) {
    const nota = this.notas[index];
    localStorage.setItem('notaEditando', JSON.stringify({ ...nota, index }));
    this.router.navigate(['/notas']);
  }

  borrarNota(index: number) {
    this.notas.splice(index, 1);
    localStorage.setItem('notas', JSON.stringify(this.notas));
  }

  irANuevaNota() {
    this.router.navigate(['/nueva-nota']);
  }
}
