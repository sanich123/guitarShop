import { act, renderHook } from '@testing-library/react-hooks';
import { searchParams } from '../../utils/const';
import useQueries from '../use-queries/use-queries';

describe('useQueries', () => {
  it('useQueries should works properly', () => {
    const { result } = renderHook(() => useQueries());
    act(() => {
      result.current.setFilterString(`${searchParams.stringCount}=7`);
    });
    expect(result.current.finalRequest).toBe([
      `${searchParams.sort}=${searchParams.defaultSort}`,
      `${searchParams.direction}=${searchParams.defaultDirection}`,
      `${searchParams.stringCount}=7`,
    ]);
  });
});
