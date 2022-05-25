import { couponValues, guitarTypesEn, guitarTypesRus } from './const';
import { getChangedString, getChangedStringBack, getCouponValueFromPercents, getTypeInRus } from './utils';

describe('All utils are working properly', () => {
  it('getTypeInRus works properly', () => {
    expect(getTypeInRus(guitarTypesEn.acoustic)).toBe(guitarTypesRus.acoustic);
  });
  it('getCouponValueFromPercents works properly', () => {
    expect(getCouponValueFromPercents(15)).toBe(couponValues.light);
  });

  it('getChangedString are working properly', () => {
    expect(getChangedString('up')).toBe('down');
  });

  it('getChangedStringBack', () => {
    expect(getChangedStringBack('up')).toBe('asc');
  });
});

