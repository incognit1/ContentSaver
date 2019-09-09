import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultWrapperComponent } from './result-wrapper.component';

describe('ResultWrapperComponent', () => {
  let component: ResultWrapperComponent;
  let fixture: ComponentFixture<ResultWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
