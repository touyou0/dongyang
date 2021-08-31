import { TestBed } from '@angular/core/testing';

import { InformationModelService } from './information-model.service';

describe('InformationModelService', () => {
  let service: InformationModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});