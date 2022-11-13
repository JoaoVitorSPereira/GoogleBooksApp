import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import { BooksDTO } from '../@types/BooksDTO';

import api from '../services/api';

interface BookContextData {
  booksData: BooksDTO[];

  getBooks: () => Promise<void>;

  pageIndex: number;
  searchBook: string;

  setPageIndex: Dispatch<SetStateAction<number>>;
  setSearchBook: Dispatch<SetStateAction<string>>;
}

interface BooksProviderProps {
  children: React.ReactNode;
}

const BookContext = createContext<BookContextData>({} as BookContextData);

function BooksProvider({ children }: BooksProviderProps) {
  const apiKey = 'AIzaSyAM_1afgDLot5FVDrJnMBTdZorkrLYOMdo';

  const [booksData, setBooksData] = useState<BooksDTO[]>([]);

  const [pageIndex, setPageIndex] = useState(0);

  const [searchBook, setSearchBook] = useState('Harry Potter');

  async function getBooks() {
    try {
      const response = await api.get(
        `volumes?q=${searchBook}&startIndex=${pageIndex}&maxResults=10&key=${apiKey}`,
      );
      if (response.status === 200) {
        if (pageIndex === 0) {
          setBooksData(response.data.items);
        } else {
          setBooksData(booksData.concat(response.data.items));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const values = useMemo(
    () => ({
      getBooks,
    }),
    [],
  );

  useEffect(() => {
    getBooks();
  }, [pageIndex]);

  useEffect(() => {
    getBooks();
  }, [searchBook]);

  return (
    <BookContext.Provider
      value={{
        ...values,
        booksData,
        setPageIndex,
        pageIndex,
        setSearchBook,
        searchBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

function useBooks(): BookContextData {
  const context = useContext(BookContext);

  return context;
}

export { BooksProvider, useBooks };
