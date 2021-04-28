import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesAdminComponent } from './profes-admin.component';

describe('ProfesAdminComponent', () => {
  let component: ProfesAdminComponent;
  let fixture: ComponentFixture<ProfesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
