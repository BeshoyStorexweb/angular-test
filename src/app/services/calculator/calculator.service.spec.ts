import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let loggerService;
  let calculator;
  beforeEach(() => {
    loggerService = jasmine.createSpyObj('loggerService', ['log']);
    calculator = new CalculatorService(loggerService);
  });
  it('Should add two numbers', () => {
    console.log('ADD');
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
  it('Should subtract two numbers', () => {
    console.log('Subtract');
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
});
