export interface BooksDTO {
  item: {
    volumeInfo: {
      title: string;
      authors: string[];
      publisher: string;
      publishedDate: string;
      description: string;
      language: string;
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
