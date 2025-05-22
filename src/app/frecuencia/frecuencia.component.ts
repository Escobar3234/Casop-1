import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Habito {
  nombre: string;
  descripcion: string;
  fecha: string;
  tipo: string;
  dias: (string | number)[];
}

@Component({
  standalone: true,
  selector: 'app-frecuencia',
  imports: [CommonModule, FormsModule],
  templateUrl: './frecuencia.component.html',
  styleUrls: ['./frecuencia.component.css']
})
export class FrecuenciaComponent {
  nombre: string = '';
  descripcion: string = '';

  frecuencia = {
    tipo: '',
    diasSemana: [] as string[],
    diasMes: [] as number[]
  };

  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  diasDelMes: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('borradorHabito');
    if (data) {
      try {
        const habito = JSON.parse(data);
        this.nombre = habito.nombre || '';
        this.descripcion = habito.descripcion || '';
      } catch (error) {
        console.error('Error al leer el borrador del hábito:', error);
      }
    }
  }
  

  toggleDiaSemana(dia: string, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.frecuencia.diasSemana.push(dia);
    } else {
      this.frecuencia.diasSemana = this.frecuencia.diasSemana.filter(d => d !== dia);
    }
  }

  toggleDiaMes(dia: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.frecuencia.diasMes.push(dia);
    } else {
      this.frecuencia.diasMes = this.frecuencia.diasMes.filter(d => d !== dia);
    }
  }

  guardarHabito() {
    if (!this.nombre || this.nombre.trim() === '') {
      console.warn("El nombre del hábito está vacío.");
      return;
    }
  
    const fechaActual = new Date();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
    const año = fechaActual.getFullYear();
    const fechaBase = `${año}-${mes}`;
  
    let dias: (string | number)[] = [];
  
    if (this.frecuencia.tipo === 'todos') {
      dias = this.diasDelMes;  // Aquí estamos usando los días del mes.
      console.log("Tipo seleccionado: TODOS, días:", dias);  // Verificar que 'todos' está seleccionado
    } else if (this.frecuencia.tipo === 'semana') {
      dias = this.frecuencia.diasSemana;
    } else if (this.frecuencia.tipo === 'mes') {
      dias = this.frecuencia.diasMes;
    }
  
    const nuevoHabito: Habito = {
      nombre: this.nombre.trim(),
      descripcion: this.descripcion.trim(),
      fecha: '', // Se asignará individualmente en cada caso
      tipo: this.frecuencia.tipo,
      dias: dias
    };
  
    if (typeof window !== 'undefined' && window.localStorage) {
      if (this.frecuencia.tipo === 'todos') {
        console.log("Guardando hábitos para todos los días...");
        // Esto solo se ejecuta cuando 'todos' está seleccionado
        for (let day of this.diasDelMes) {
          const dia = String(day).padStart(2, '0');
          const fecha = `${fechaBase}-${dia}`;
          console.log("Guardando hábito para la fecha:", fecha);
  
          const habitosDia = JSON.parse(localStorage.getItem(fecha) || '[]');
          console.log("Hábitos ya existentes para la fecha:", habitosDia);
  
          const yaExiste = habitosDia.some((h: Habito) =>
            h.nombre === nuevoHabito.nombre &&
            h.tipo === nuevoHabito.tipo
          );
  
          if (!yaExiste) {
            habitosDia.push({ ...nuevoHabito, fecha });
            localStorage.setItem(fecha, JSON.stringify(habitosDia));
            console.log(`Hábito guardado para el día ${fecha}:`, nuevoHabito);
          } else {
            console.log(`El hábito ya existe para el día ${fecha} y no se sobrescribirá.`);
          }
        }
      } else {
        console.log("Guardando hábito para una fecha específica...");
        // Si no es 'todos', se guarda el hábito para la fecha seleccionada
        const fechaSeleccionada = localStorage.getItem('fechaSeleccionada') || new Date().toISOString().split('T')[0];
        let habitos: Habito[] = JSON.parse(localStorage.getItem('habito') || '[]');
        if (!Array.isArray(habitos)) habitos = [];
  
        const yaExiste = habitos.some((h: Habito) =>
          h.nombre === nuevoHabito.nombre &&
          h.fecha === fechaSeleccionada &&
          h.tipo === nuevoHabito.tipo &&
          Array.isArray(h.dias) &&
          Array.isArray(nuevoHabito.dias) &&
          h.dias.length === nuevoHabito.dias.length &&
          h.dias.every((d: string | number) => nuevoHabito.dias.includes(d))
        );
  
        if (!yaExiste) {
          nuevoHabito.fecha = fechaSeleccionada;
          habitos.push(nuevoHabito);
          localStorage.setItem('habito', JSON.stringify(habitos));
          console.log("Hábito guardado:", nuevoHabito);
        } else {
          console.warn("Este hábito ya existe y no será duplicado.");
        }
      }
  
      this.router.navigate(['/h-inico']);
    } else {
      console.error("localStorage no está disponible.");
    }
  }
  
}
