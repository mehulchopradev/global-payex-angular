import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('returns capitalized data for an input with 1 character', () => {
    const actual = pipe.transform('m');
    expect(actual).toBe('M');
  });

  it('returns capitalized data for an input with more than 1 character', () => {
    const actual = pipe.transform('good Morning');
    expect(actual).toBe('Good morning');
  });

  it('returns nothing when no input passed in', () => {
    const actual = pipe.transform('');
    expect(actual).toBe('');
  });
});
