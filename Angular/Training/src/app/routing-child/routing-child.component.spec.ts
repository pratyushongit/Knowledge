import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChildComponent } from './routing-child.component';

describe('RoutingChildComponent', () => {
  let component: RoutingChildComponent;
  let fixture: ComponentFixture<RoutingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
