import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionChildComponent } from './change-detection-child.component';

describe('ChangeDetectionChildComponent', () => {
  let component: ChangeDetectionChildComponent;
  let fixture: ComponentFixture<ChangeDetectionChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
