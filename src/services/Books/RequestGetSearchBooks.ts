import api from '../';

import { GOOGLE_API_KEY } from '@env';

import { BooksDTO } from '../../@types/BooksDTO';

export default async (search: string): Promise<BooksDTO[]> => {
  const response = await api.get(
    `volumes?q=${search}&maxResults=10&key=${GOOGLE_API_KEY}`,
  );
  return response.data.items;
};
