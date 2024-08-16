import { TestBed } from "@angular/core/testing";
import { CrudService } from './crud.service';
import { HttpClientModule } from '@angular/common/http';

describe('CrudService',()=>{

  let service : CrudService;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    })
    service = TestBed.inject(CrudService);
  })

  it('get data from service', (done)=>{
    service.getData().subscribe(data=>{
      expect(data.completed).toBeFalsy();
      done();
    });
  });
});