import { AxiosResponse } from 'axios';
import { LIBRARIES } from '../../shared/api.config'
import { axiosAPI } from '../../shared/axios.config';
import { LibraryModel } from './library.model';

export const createLibraryPost = (): Promise<AxiosResponse<LibraryModel>> => axiosAPI.post(LIBRARIES);
