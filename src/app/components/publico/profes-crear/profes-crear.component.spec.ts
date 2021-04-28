import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesCrearComponent } from './profes-crear.component';

describe('ProfesCrearComponent', () => {
  let component: ProfesCrearComponent;
  let fixture: ComponentFixture<ProfesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
