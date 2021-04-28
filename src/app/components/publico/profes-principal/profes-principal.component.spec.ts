import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesPrincipalComponent } from './profes-principal.component';

describe('ProfesPrincipalComponent', () => {
  let component: ProfesPrincipalComponent;
  let fixture: ComponentFixture<ProfesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
