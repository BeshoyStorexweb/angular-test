import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService],
    });

    service = TestBed.inject(LoggerService);
  });
  it('Should not have any message at starting', () => {
    let count = service.messages.length;
    expect(count).toBe(0);
  });

  it('add a message when log is called', () => {
    service.log('Hello');
    expect(service.messages.length).toBe(1);
  });

  it('clear all messages', () => {
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
