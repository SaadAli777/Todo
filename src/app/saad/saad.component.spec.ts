import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaadComponent } from './saad.component';

describe('SaadComponent', () => {
  let component: SaadComponent;
  let fixture: ComponentFixture<SaadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
