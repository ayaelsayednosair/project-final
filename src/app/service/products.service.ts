import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getdatapi(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getproduct() {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  searchProducts(query: string): Observable<Product[]> {
    const searchUrl = `${this.apiUrl}?search=${query}`;
    return this.http.get<Product[]>(searchUrl);
  }
  populerproducts() {
    const url = `${this.apiUrl}?_limit=${3}`;
    return this.http.get<any[]>(url);
  }
}
