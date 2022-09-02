import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let loggerServiceSpy;
  let calculator;

  beforeEach(() => {
    const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: mockLoggerService },
      ],
    });
    calculator = TestBed.inject(CalculatorService);
    loggerServiceSpy = TestBed.inject(LoggerService);
  });
  it('Should add two numbers', () => {
    console.log('ADD');
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
  it('Should subtract two numbers', () => {
    console.log('Subtract');
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
});
