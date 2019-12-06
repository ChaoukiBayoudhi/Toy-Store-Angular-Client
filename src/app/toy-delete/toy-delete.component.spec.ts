import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyDeleteComponent } from './toy-delete.component';

describe('ToyDeleteComponent', () => {
  let component: ToyDeleteComponent;
  let fixture: ComponentFixture<ToyDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
