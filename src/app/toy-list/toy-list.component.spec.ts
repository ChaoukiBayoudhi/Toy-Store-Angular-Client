import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyListComponent } from './toy-list.component';

describe('ToyListComponent', () => {
  let component: ToyListComponent;
  let fixture: ComponentFixture<ToyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
