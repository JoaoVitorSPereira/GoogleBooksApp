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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GOOGLE_API_KEY } from '@env';

import api from '../services/api';
import { useAuth } from './auth';

interface BookContextData {
  booksData: BooksDTO[];
  favourites: BooksDTO[];

  getBooks: () => Promise<void>;
  searchBooks: () => Promise<void>;
  addFavourite: (value: BooksDTO[], item: BooksDTO) => Promise<void>;
  removeFavorite: (value: BooksDTO[], item: BooksDTO) => Promise<void>;

  loading: boolean;

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
  const { userData } = useAuth();
  const apiKey = 'AIzaSyAM_1afgDLot5FVDrJnMBTdZorkrLYOMdo';
  const userKey = `@googleBooks:data_user:${userData.name}`;

  const [loading, setLoading] = useState(false);

  const [booksData, setBooksData] = useState<BooksDTO[]>([]);

  const [pageIndex, setPageIndex] = useState(0);

  const [searchBook, setSearchBook] = useState('Harry Potter');

  const [favourites, setFavourites] = useState<BooksDTO[]>([]);

  async function getBooks() {
    try {
      setLoading(true);
      const response = await api.get(
        `volumes?q=${searchBook}&startIndex=${pageIndex}&maxResults=10&key=${GOOGLE_API_KEY}`,
      );
      if (response.status === 200) {
        setBooksData(response.data.items);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function searchBooks() {
    try {
      setLoading(true);
      const response = await api.get(
        `volumes?q=${searchBook}&maxResults=10&key=${GOOGLE_API_KEY}`,
      );
      if (response.status === 200) {
        setBooksData(response.data.items);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function addFavourite(value: BooksDTO[], item: BooksDTO) {
    try {
      const newFavourites = [...value, item];
      setFavourites(newFavourites);
      await AsyncStorage.setItem(userKey, JSON.stringify(newFavourites));
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFavorite(value: BooksDTO[], item: BooksDTO) {
    try {
      const newFavourites = value.filter(itens => itens.id !== item.id);
      setFavourites(newFavourites);
      await AsyncStorage.setItem(userKey, JSON.stringify(newFavourites));
    } catch (error) {
      console.log(error);
    }
  }

  const values = useMemo(
    () => ({
      getBooks,
      searchBooks,
      addFavourite,
      removeFavorite,
    }),
    [],
  );

  useEffect(() => {
    getBooks();
  }, [pageIndex]);

  useEffect(() => {
    searchBooks();
  }, [searchBook]);

  useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem(userKey);
        if (data) {
          const favourites = JSON.parse(data) as BooksDTO[];
          setFavourites(favourites);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <BookContext.Provider
      value={{
        ...values,
        loading,
        booksData,
        setPageIndex,
        pageIndex,
        setSearchBook,
        searchBook,
        favourites,
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
