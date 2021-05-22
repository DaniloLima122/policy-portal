
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { first, take } from 'rxjs/operators';
import { Policy } from "./model/Policy";
import { PolicyService } from './policy.service';


const PolicyMock: Policy = {

  id: 3,
  category: "Information Security",
  name: "Cybersecurity and Computing Resources",
  version: "Version 2.0, 30 Jan 2018",
  favorite: false,
  status: "standard",
  group: "pending",
}

describe('PolicyServiceService', () => {
  let service: PolicyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PolicyService]
    });
    service = TestBed.inject(PolicyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return policies list', fakeAsync(() => {
    service.getPolicies().pipe(take(1)).subscribe(policies => {
      expect(policies).toEqual(PolicyMock);
    });

    const req = httpMock.expectOne('http://localhost:3000/policies');

    expect(req.request.method).toBe("GET")

    req.flush(PolicyMock);

    tick();
  }))

  it('should favorite card', fakeAsync(() => {

    const policyId = PolicyMock.id;

    service.favoritePolicy(3, true).pipe(take(1)).subscribe(policy => {
      expect(policy.favorite).toBeTruthy();
    });

    const req = httpMock.expectOne(`http://localhost:3000/policies/3`);
    expect(req.request.method).toBe("PATCH");

    req.flush({ favorite: true });

    tick();
  }))
});
