import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesWrapperComponent } from './favorites-wrapper.component';

describe('ResultWrapperComponent', () => {
  let component: FavoritesWrapperComponent;
  let fixture: ComponentFixture<FavoritesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
