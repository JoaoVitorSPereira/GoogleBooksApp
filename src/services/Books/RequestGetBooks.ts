import api from '../';

import { GOOGLE_API_KEY } from '@env';

import { BooksDTO } from '../../@types/BooksDTO';

export default async (search: string, index: number): Promise<BooksDTO[]> => {
  const response = await api.get(
    `volumes?q=${search}&startIndex=${index}&maxResults=10&key=${GOOGLE_API_KEY}`,
  );
  return response.data;
};
