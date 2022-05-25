export interface IBookModel {
  isbn: string;
  title: string;
  authors: string[];
}

export class BookModel {
  isbn!: string;
  title!: string;
  authors!: string[];

  constructor(props: IBookModel) { 
    Object.assign(this, props);
  }
}