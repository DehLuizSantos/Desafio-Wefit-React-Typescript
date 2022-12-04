import { ProductProps } from './../interfaces/products.interface';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export default class CartItens {
  private http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:3001'
    });
  }

  public async postCartItem(body:ProductProps | undefined ) {
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
}