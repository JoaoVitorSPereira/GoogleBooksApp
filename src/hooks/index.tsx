import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { BooksProvider } from './books';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <BooksProvider>{children}</BooksProvider>
    </AuthProvider>
  );
}

export { AppProvider };
