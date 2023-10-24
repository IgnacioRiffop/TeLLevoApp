import { TestBed } from '@angular/core/testing';

import { ServJsonServerService } from './serv-json-server.service';

describe('ServJsonServerService', () => {
  let service: ServJsonServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServJsonServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
