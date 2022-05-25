export interface ILibraryModel {
  id: string;
}

export class LibraryModel {
  id!: string;
  
  constructor(props: ILibraryModel) { 
    Object.assign(this, props);
  }
}