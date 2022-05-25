import { useState, useEffect } from 'react';
import { Book } from '../book/book.compontent';
import { createLibraryPost } from './library.service'
import { getBooks, createBookPost } from '../book/book.service'
import { IBookModel } from '../book/book.model';
import cryptoRandomString from 'crypto-random-string';

import './library.scss';
import { BookEdit } from '../book/book-edit.component';

export const Library = () => {
  const [libraryId, setLibraryId] = useState('');
  const [books, setBooks] = useState<IBookModel[]>([]);

  const [isError, setIsError] = useState(false);
  
  const getLatestBooks = (): void => {
    if (libraryId) {
      getBooks(libraryId)
        .then(({ data }) => {
          console.log(data);
          setBooks(data)
        })
        .catch(() => setIsError(true))
    }
  }

  const handleAddABook = ( title: string, authors: string[]) => {
    createBookPost({
      title,
      authors,
      isbn: cryptoRandomString({ length: 16, type: 'base64' }),
    }, libraryId)
      .then((res) => getLatestBooks())
      .catch((e) => {
        console.log(e);
        setIsError(true)
      })
  }
  

  const onCreateLibraryHandler =
    () => createLibraryPost()
      .then(({data}) =>
      {
        console.log(data.id);
        setLibraryId(data.id)
      })
      .catch((e) => {
        console.log(e);
        setIsError(true)
      })
  

  useEffect(() => {
    getLatestBooks();
  }, [libraryId])

  return (
    <>
      <div>Library</div>
      <button onClick={onCreateLibraryHandler}>Create Library</button>
      <>
        <div className='library__books-container'>
          {!libraryId || <BookEdit handleAddABook={handleAddABook}></BookEdit>}
          {
            books.map((bd, i) => (<Book key={i} bookDetails={ bd } index={i + 1}></Book>))
          }
        </div>
          
      </>
      
      {
        !isError || (<div>Oops, something went wrong!</div>)
      }
    </>)
}