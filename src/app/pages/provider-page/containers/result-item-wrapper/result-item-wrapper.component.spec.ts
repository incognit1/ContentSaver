import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultItemWrapperComponent } from './result-item-wrapper.component';

describe('ResultItemWrapperComponent', () => {
  let component: ResultItemWrapperComponent;
  let fixture: ComponentFixture<ResultItemWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultItemWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
