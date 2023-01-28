import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../Logger/logger.service';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let cal_service: CalculatorService;
  let mock_log_service: any;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(CalculatorService);

    // log_service =  new LoggerService();
    // spyOn(log_service, 'log').and.callThrough();

    // don't have to call real function
    mock_log_service = jasmine.createSpyObj('LoggerService', ['log']);
    cal_service =  new CalculatorService(mock_log_service);
  });

  it('should be created', () => {
    expect(cal_service).toBeTruthy();
  });

  it('should add two numbers', () => {
    let result = cal_service.add(2, 2);
    expect(result).toBe(4);
    expect(mock_log_service.log).toHaveBeenCalledTimes(1);
  })

  it('should subtract two numbers', () => {
    let result = cal_service.subtract(3, 2);
    expect(result).toBe(1);
    expect(mock_log_service.log).toHaveBeenCalledTimes(1);
  })
});

