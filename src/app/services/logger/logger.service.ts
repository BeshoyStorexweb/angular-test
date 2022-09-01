import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  messages: string[] = [];
  log(msg: string) {
    debugger;
    this.messages.push(msg);
  }
}
