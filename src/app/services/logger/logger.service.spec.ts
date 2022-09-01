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
    expect(service.messages.length).toBe(1);
  });

  it('clear all messages', () => {
    const service = new LoggerService();
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
