import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesEditarComponent } from './profes-editar.component';

describe('ProfesEditarComponent', () => {
  let component: ProfesEditarComponent;
  let fixture: ComponentFixture<ProfesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
