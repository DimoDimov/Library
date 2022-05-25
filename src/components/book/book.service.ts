import { AxiosResponse } from 'axios';
import { BOOKS, LIBRARIES } from '../../shared/api.config'
import { axiosAPI } from '../../shared/axios.config';
import { IBookModel } from './book.model';

export const getBooks = (libraryId: string):Promise<AxiosResponse<IBookModel[]>> => axiosAPI.get(`${LIBRARIES}/${libraryId}/${BOOKS}`);

export const createBookPost = (bookDetails: IBookModel, libraryId: string): Promise< AxiosResponse<{libraryId: string}>> => axiosAPI.post(`${LIBRARIES}/${libraryId}/${BOOKS}`, bookDetails);
