import { act, renderHook } from '@testing-library/react-hooks';
import { searchParams } from '../../utils/const';
import useQueries from '../use-queries/use-queries';
import { BrowserRouter } from 'react-router-dom';

describe('useQueries', () => {
  it('useQueries should works properly', () => {
    const wrapper = ({ children }: never) => <BrowserRouter>{children}</BrowserRouter>;
    const { result } = renderHook(() => useQueries(), {wrapper});
    act(() => {
      result.current.setFilterString(`${searchParams.stringCount}=7`);
    });
    expect(result.current.finalRequest).toBe([`${searchParams.sort}=${searchParams.defaultSort}`, `${searchParams.direction}=${searchParams.defaultDirection}`, `${searchParams.stringCount}=7`].join('&'));
  });
});
