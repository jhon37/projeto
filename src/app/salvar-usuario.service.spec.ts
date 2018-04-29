import { TestBed, inject } from '@angular/core/testing';

import { SalvarUsuarioService } from './salvar-usuario.service';

describe('SalvarUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalvarUsuarioService]
    });
  });

  it('should be created', inject([SalvarUsuarioService], (service: SalvarUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
