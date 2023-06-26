import { ProductProps } from './../interfaces/products.interface';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export default class CartItens {
  private http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: process.env.REACT_APP_WEMOVIES_API_URL
    });
  }

  public async postCartItem(body: ProductProps | undefined) {
    try {
      const response: AxiosResponse = await this.http.post('/cartItens', body);
      return { data: response.data, error: false };
    } catch (error: AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true };
      }
      return { error: true };
    }
  }
  public async getCartItem() {
    try {
      const response: AxiosResponse = await this.http.get('/cartItens');
      return { data: response.data, error: false };
    } catch (error: AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true };
      }
      return { error: true };
    }
  }
  public async deleteCartItem(itemId: number) {
    try {
      const response: AxiosResponse = await this.http.delete(`/cartItens/${itemId}`);
      return { data: response.data, error: false };
    } catch (error: AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true };
      }
      return { error: true };
    }
  }
  public async putQuantityItem(id: number, body: ProductProps | undefined) {
    try {
      const response: AxiosResponse = await this.http.put(`/cartItens/${id}`, body);
      return { data: response.data, error: false };
    } catch (error: AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true };
      }
      return { error: true };
    }
  }
}
