import { act, renderHook } from '@testing-library/react-hooks';
import { useModal } from './use-modal';

describe('useModal', () => {
  it('useModal should works properly', () => {
    const {result} = renderHook(() => useModal());
    act(() => {
      result.current.setActionModal(true);
    });
    expect(result.current.showActionModal).toBe(true);
  });
});
