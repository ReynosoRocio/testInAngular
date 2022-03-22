import { TestBed } from '@angular/core/testing';

import { ConectarUsuariosService } from './conectar-usuarios.service';

describe('ConectarUsuariosService', () => {
  let service: ConectarUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConectarUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
