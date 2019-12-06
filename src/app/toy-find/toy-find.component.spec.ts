import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyFindComponent } from './toy-find.component';

describe('ToyFindComponent', () => {
  let component: ToyFindComponent;
  let fixture: ComponentFixture<ToyFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
