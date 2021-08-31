import { TestBed } from '@angular/core/testing';

import { InformationModelMockService } from './information-model-mock.service';

describe('informationModelMockService', () => {
  let service: InformationModelMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationModelMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});