import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFomrsComponent } from './reactive-fomrs.component';

describe('ReactiveFomrsComponent', () => {
  let component: ReactiveFomrsComponent;
  let fixture: ComponentFixture<ReactiveFomrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFomrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFomrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
