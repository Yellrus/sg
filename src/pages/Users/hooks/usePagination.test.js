import { act, renderHook } from '@testing-library/react-hooks';
import usePagination from './usePagination';

describe('page next', () => {
  it('page count by 2', () => {
    const { result } = renderHook(usePagination);

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.page).toBe(2);
  });
});

describe('page prev', () => {
  it('page count by 1', () => {
    const { result } = renderHook(usePagination);

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.page).toBe(1);
  });
});
