import { act, renderHook } from '@testing-library/react-hooks';
import { BooksDTO } from '../../@types/BooksDTO';
import { BooksProvider, useBooks } from '../../hooks/books';

describe('Books Hook', () => {
  it('should be able to check loading value', () => {
    const { result } = renderHook(() => useBooks(), {
      wrapper: BooksProvider,
    });
    expect(result.current.loading).toBeFalsy();
  });
  it('should be able to get books from API', async () => {
    const { result } = renderHook(() => useBooks(), {
      wrapper: BooksProvider,
    });
    await act(() => result.current.getBooks());

    expect(result.current.booksData).toMatch([]);
  });
});
