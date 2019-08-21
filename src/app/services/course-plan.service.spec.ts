import { TestBed } from '@angular/core/testing';

import { CoursePlanService } from './course-plan.service';

describe('CoursePlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursePlanService = TestBed.get(CoursePlanService);
    expect(service).toBeTruthy();
  });
});
