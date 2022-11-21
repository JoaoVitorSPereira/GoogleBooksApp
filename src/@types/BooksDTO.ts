export interface BooksDTO {
  id: string;
  item: {
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
