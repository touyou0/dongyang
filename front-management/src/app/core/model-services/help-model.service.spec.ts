import { TestBed } from '@angular/core/testing';

import { HelpModelService } from './help-model.service';

describe('Help\ModelService', () => {
  let service: HelpModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});