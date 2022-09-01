import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  it('Should not have any message at starting', () => {
    const service = new LoggerService();
    let count = service.messages.length;
    expect(count).toBe(0);
  });

  it('add a message when log is called', () => {
    const service = new LoggerService();
    service.log('Hello');
    expect(service.messages);
  });
});
