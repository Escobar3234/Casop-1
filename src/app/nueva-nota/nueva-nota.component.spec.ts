import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaNotaComponent } from './nueva-nota.component';

describe('NuevaNotaComponent', () => {
  let component: NuevaNotaComponent;
  let fixture: ComponentFixture<NuevaNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaNotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
