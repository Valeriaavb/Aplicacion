import { TestBed } from '@angular/core/testing';

import { IngredienteRecetaService } from './ingrediente-receta.service';

describe('IngredienteRecetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredienteRecetaService = TestBed.get(IngredienteRecetaService);
    expect(service).toBeTruthy();
  });
});
