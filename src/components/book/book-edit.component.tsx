import { useState } from 'react';

import './book-edit.scss';

export const BookEdit = ({handleAddABook}: {handleAddABook: (title: string, authors: string[]) => void}) => {
  const [bookTitle, setBookTitle] = useState('');
  const [inputAuthorFields, setInputAuthorFields] = useState<{ [key: string]: string }>(
    { 'authorName1': '' }
  )

  const handleAddAuthor = () => {
    const newAuthorFields: { [key: string]: string } = { ...inputAuthorFields }
    const newKey = `authorName${Object.keys(inputAuthorFields).length + 1}`;
    newAuthorFields[newKey] = '';

    setInputAuthorFields(newAuthorFields)
  }

  const handleAddBookToLibrary = () => {
    const authors = Object.keys(inputAuthorFields)
      .map((key) => {
        const currValue = inputAuthorFields[key];
        if (currValue && typeof currValue === 'string') {
          return currValue;
        } else {
          return ''
        }
      // skip empty authors
      }).filter(value => value !== '');
    if(authors.length){
      handleAddABook(bookTitle, authors)
    }
  }

  return (
    <>
      <div className="book-edit__container">
        <form>
          <div className='book-edit__input-wrapper'>
            <label>
                Book Title
              <input
                className='book-edit__input'
                name="bookName"
                placeholder='Book Title'
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)} />
            </label>
          </div>
          
          {Object.keys(inputAuthorFields).map((key, index) => {
            return (
              <div key={key} className='book-edit__input-wrapper'>
                <label>
                    Author Name {index + 1}
                  <input
                      className='book-edit__input'
                      name={key}
                      placeholder={`Author Name ${index + 1}`}
                      onChange={(e) => {
                        const updatedInputAuthorFields = { ...inputAuthorFields };
                        updatedInputAuthorFields[key] = e.target.value;
                        setInputAuthorFields(updatedInputAuthorFields)
                        console.log('updated ---->', inputAuthorFields);
                        }
                      } />  
                </label>
              </div>
                
            )
          })}
          <div className='book-edit__add-author-btn-wrapper'>
            <button 
              onClick={(e) => { handleAddAuthor(); e.preventDefault(); }}>
              + Add Author
            </button>
            <button 
              onClick={(e) => { handleAddBookToLibrary(); e.preventDefault(); }}>
              Add Book To Library
            </button>
          </div>

          </form>
      </div>
    </>)
}