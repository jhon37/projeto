import { TestBed, inject } from '@angular/core/testing';

import { AuthProtectService } from './auth-protect.service';

describe('AuthProtectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthProtectService]
    });
  });

  it('should be created', inject([AuthProtectService], (service: AuthProtectService) => {
    expect(service).toBeTruthy();
  }));
});
