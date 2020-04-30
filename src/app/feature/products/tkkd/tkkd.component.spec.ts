import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkkdComponent } from './tkkd.component';

describe('TkkdComponent', () => {
  let component: TkkdComponent;
  let fixture: ComponentFixture<TkkdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TkkdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkkdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
