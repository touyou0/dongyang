import { TestBed } from '@angular/core/testing';

import { HelpModelMockService } from './help-model-mock.service';

describe('HelpModelMockService', () => {
  let service: HelpModelMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpModelMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
