import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesListarComponent } from './profes-listar.component';

describe('ProfesListarComponent', () => {
  let component: ProfesListarComponent;
  let fixture: ComponentFixture<ProfesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
