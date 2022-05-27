import { act, renderHook } from '@testing-library/react-hooks';

import useForm from './use-form';

describe('UseForm', () => {
  it('useForm should work properly', () => {
    const {result} = renderHook(() => useForm());
    expect(result.current.rating).toBe('');
    act(() => {
      result.current.setAdvantage('Очень хорошо');
    });
    expect(result.current.advantage).toBe('Очень хорошо');
    act(() => {
      result.current.setComment('Отвратительная гитара');
    });
    expect(result.current.comment).toBe('Отвратительная гитара');
  });
});
