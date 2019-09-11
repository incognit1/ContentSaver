import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFiltersWrapperComponent } from './search-filters-wrapper.component';

describe('SearchFiltersWrapperComponent', () => {
  let component: SearchFiltersWrapperComponent;
  let fixture: ComponentFixture<SearchFiltersWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFiltersWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFiltersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
