import { TestBed, inject } from '@angular/core/testing';

import { SalvarRoleService } from './salvar-role.service';

describe('SalvarRoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalvarRoleService]
    });
  });

  it('should be created', inject([SalvarRoleService], (service: SalvarRoleService) => {
    expect(service).toBeTruthy();
  }));
});
