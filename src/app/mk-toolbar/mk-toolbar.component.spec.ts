import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkToolbarComponent } from './mk-toolbar.component';

describe('MkToolbarComponent', () => {
  let component: MkToolbarComponent;
  let fixture: ComponentFixture<MkToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
