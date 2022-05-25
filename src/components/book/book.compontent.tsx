import { BookModel } from "./book.model"
import './book.scss';

export const Book = ({bookDetails, index}: {bookDetails: BookModel, index: number}) => {

  return (
    <>
      <div className="book__container">
        <div>Book #{index}</div>
        <div>Title: {bookDetails.title}</div>
        <div>Authors: {bookDetails.authors.join(', ').toString()}</div>
      </div>
    </>)
}