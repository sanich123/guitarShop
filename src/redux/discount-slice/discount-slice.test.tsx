import reducer, { addDiscount } from './discount-slice';

describe('DiscountSlice', () => {
  it('Should correctly install initialState', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      discount: 0,
    });
  });

  it('Should correctly addDiscount', () => {
    expect(reducer({discount: 0}, addDiscount(20))).toEqual({discount: 20});
  });
});
