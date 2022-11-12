export interface BooksDTO {
  items: {
    volumeInfo: {
      title: string;
      authors: string[];
      publisher: string;
      publishedDate: string;
      description: string;
      imageLinks: {
        thumbnail: string;
      };
      salesInfo: {
        listPrice: {
          amount: number;
          currencyCode: string;
        };
      };
    };
  }[];
}
