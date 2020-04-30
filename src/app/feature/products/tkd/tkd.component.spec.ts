import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkdComponent } from './tkd.component';

describe('TkdComponent', () => {
  let component: TkdComponent;
  let fixture: ComponentFixture<TkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
