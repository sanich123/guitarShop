import { couponValues, guitarTypesEn, guitarTypesRus } from './const';
import { getTypeInRus } from './utils';

describe('All utils are working properly', () => {
  it('getTypeInRus works properly', () => {
    expect(getTypeInRus(guitarTypesEn.acoustic)).toBe(guitarTypesRus.acoustic);
  });
  it('getCouponValueFromPercents works properly', () => {
    expect(15).toBe(couponValues.light);
  });

  it('getChangedString are working properly', () => {
    expect('up').toBe('asc');
  });

  it('getChangedStringBack', () => {
    expect('up').toBe('asc');
  });
});


