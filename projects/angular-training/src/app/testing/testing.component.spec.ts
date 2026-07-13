import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from 'rxjs';
import { TestingComponent } from './testing.component';
import { CrudService } from '../common/services/crud.service';

const response = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
};

class MockService {
  getData(){
    return of(response);
  }
}

describe('TestingComponent',()=>{

  let component : TestingComponent;
  let fixture : ComponentFixture<TestingComponent>;
  let mockCrudService : CrudService;

  // Services
  beforeEach( async (()=>{
    TestBed.configureTestingModule({
      providers : [
        {provide : CrudService , useClass: MockService}
      ]
    }).compileComponents();
    mockCrudService = TestBed.inject(CrudService);
  }));
  
  // Components
  beforeEach(()=>{

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return true for positive',()=>{
    let value = component.compute(2);
    expect(value).toBeTruthy();
  });

  it('sould set value of title from server',()=>{
    spyOn(mockCrudService , 'getData').and.returnValue(of(response));
    component.trigger();
    expect(component.title).toBe('delectus aut autem');
  });
})
