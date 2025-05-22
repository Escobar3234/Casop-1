import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HInicoComponent } from './h-inico.component';

describe('HInicoComponent', () => {
  let component: HInicoComponent;
  let fixture: ComponentFixture<HInicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HInicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HInicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
