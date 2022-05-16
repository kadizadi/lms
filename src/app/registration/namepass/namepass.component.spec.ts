import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamepassComponent } from './namepass.component';

describe('NamepassComponent', () => {
  let component: NamepassComponent;
  let fixture: ComponentFixture<NamepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamepassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
