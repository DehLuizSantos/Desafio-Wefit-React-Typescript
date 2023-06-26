// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ProductProps } from '../interfaces/products.interface';

export default class ProductService {
  private http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: process.env.REACT_APP_WEMOVIES_API_URL
    });
  }

  public async getProducts() {
    try {
      const response: AxiosResponse = await this.http.get('/products');
      return { data: response.data, error: false };
    } catch (error: AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true };
      }
      return { error: true };
    }
  }

  public async putAddCard(id: number, body: ProductProps | undefined) {
    try {
      const response: AxiosResponse = await this.http.put(`/products/${id}`, body);
      return { data: response.data, error: false };
    } catch (error: AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true };
      }
      return { error: true };
    }
  }
}
