import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyEditComponent } from './toy-edit.component';

describe('ToyEditComponent', () => {
  let component: ToyEditComponent;
  let fixture: ComponentFixture<ToyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
