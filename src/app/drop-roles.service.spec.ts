import { TestBed, inject } from '@angular/core/testing';

import { DropRolesService } from './drop-roles.service';

describe('DropRolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropRolesService]
    });
  });

  it('should be created', inject([DropRolesService], (service: DropRolesService) => {
    expect(service).toBeTruthy();
  }));
});
