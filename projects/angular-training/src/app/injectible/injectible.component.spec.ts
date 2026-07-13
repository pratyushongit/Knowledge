import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectibleComponent } from './injectible.component';

describe('InjectibleComponent', () => {
  let component: InjectibleComponent;
  let fixture: ComponentFixture<InjectibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
