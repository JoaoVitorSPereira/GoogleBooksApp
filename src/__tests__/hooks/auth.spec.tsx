import { act, renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/auth';

describe('Auth Hook', () => {
  it('should be able to log in the app', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    await act(() => result.current.signIn('Pedro'));

    expect(result.current.userData).toBeTruthy();
  });
});
