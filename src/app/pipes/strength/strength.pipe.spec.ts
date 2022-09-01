import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should display weak if value is less than 10', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 is Weak');
  });
  it('Should display weak if value is less than 30', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(30)).toEqual('30 is Strongest');
  });
});
