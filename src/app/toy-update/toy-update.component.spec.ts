import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyUpdateComponent } from './toy-update.component';

describe('ToyUpdateComponent', () => {
  let component: ToyUpdateComponent;
  let fixture: ComponentFixture<ToyUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
