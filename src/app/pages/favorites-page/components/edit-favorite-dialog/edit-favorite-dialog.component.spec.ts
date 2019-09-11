import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFavoriteDialogComponent } from './edit-favorite-dialog.component';

describe('EditFavoriteDialogComponent', () => {
  let component: EditFavoriteDialogComponent;
  let fixture: ComponentFixture<EditFavoriteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFavoriteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFavoriteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
