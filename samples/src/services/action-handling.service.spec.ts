import { TestBed } from '@angular/core/testing';

import { ActionHandlingService } from './action-handling.service';

describe('ActionHandlingService', () => {
  let service: ActionHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
