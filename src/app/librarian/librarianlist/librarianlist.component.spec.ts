import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarianlistComponent } from './librarianlist.component';

describe('LibrarianlistComponent', () => {
  let component: LibrarianlistComponent;
  let fixture: ComponentFixture<LibrarianlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarianlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarianlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
