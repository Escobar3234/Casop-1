import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-habitos',
  templateUrl: './habitos.component.html',
  styleUrls: ['./habitos.component.css']
})
export class HabitosComponent {
  habito = {
    nombre: '',
    descripcion: ''
  };

  constructor(private router: Router) {}

  guardarHabito() {
    const habit = {
      nombre: this.habito.nombre,
      descripcion: this.habito.descripcion
    };
    localStorage.setItem('borradorHabito', JSON.stringify(habit));

    // Después de guardar, redirige al componente de frecuencia
    this.router.navigate(['/frecuencia']); // Asegúrate de que la ruta '/frecuencia' esté configurada
  }
  irAInicio() {
    this.router.navigate(['/h-inico']); // Ajusta la ruta si es diferente
  }
}
