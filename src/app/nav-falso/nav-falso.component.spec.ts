import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFalsoComponent } from './nav-falso.component';

describe('NavFalsoComponent', () => {
  let component: NavFalsoComponent;
  let fixture: ComponentFixture<NavFalsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavFalsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavFalsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
