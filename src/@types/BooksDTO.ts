export interface BooksDTO {
  id: string;
  items: {
    volumeInfo: {
      title: string;
      authors: string[];
      publisher: string;
      publishedDate: string;
      description: string;
      language: string;
      pageCount: number;
      subtitle: string;
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
  };
}
