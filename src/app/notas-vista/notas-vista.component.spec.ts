import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // para mockear Router
import { NotasVistaComponent } from './notas-vista.component';

describe('NotasVistaComponent', () => {
  let component: NotasVistaComponent;
  let fixture: ComponentFixture<NotasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotasVistaComponent],
      imports: [RouterTestingModule] // Importar RouterTestingModule para el router
    }).compileComponents();

    fixture = TestBed.createComponent(NotasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
