import { TestBed } from '@angular/core/testing';

import { LabelService } from './label.service';

describe('LabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  describe('On Service creation', () => {
    it('exists', () => {
      expect(TestBed.get(LabelService)).toBeTruthy();
    });
  });
});
