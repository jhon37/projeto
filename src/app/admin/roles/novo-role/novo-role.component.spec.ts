import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoRoleComponent } from './novo-role.component';

describe('NovoRoleComponent', () => {
  let component: NovoRoleComponent;
  let fixture: ComponentFixture<NovoRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
