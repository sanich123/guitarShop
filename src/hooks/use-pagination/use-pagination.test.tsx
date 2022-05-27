import { act, renderHook } from '@testing-library/react-hooks';
import { mockGuitars } from '../../mocks/mocks';

import {usePagination} from './use-pagination';

describe('usePagination', () => {
  it('usePagination should works properly', () => {
    const { result } = renderHook(() => usePagination(mockGuitars));
    act(() => {
      result.current.setPageNumber(1);
    });
    expect(result.current.pageNumber).toBe(1);
  });
});
