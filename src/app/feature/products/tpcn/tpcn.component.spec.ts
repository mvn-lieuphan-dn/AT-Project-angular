import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpcnComponent } from './tpcn.component';

describe('TpcnComponent', () => {
  let component: TpcnComponent;
  let fixture: ComponentFixture<TpcnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpcnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
