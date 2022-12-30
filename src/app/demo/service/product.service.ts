import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Product } from '../api/product';

@Injectable()
export class ProductService {
    private readonly API =
        'https://invoices-control-default-rtdb.firebaseio.com/';

    constructor(private http: HttpClient) {}

    getProducts() {
        return this.http.get<Product[]>(`${this.API}data/.json`);
    }

    findProductById(id: any) {
        return this.http.get(`${this.API}/data${id}.json`).pipe(take(1));
    }

    putProduct(product: any) {
        return this.http
            .put(`${this.API}data/NUMERO ATUAL + 1.json`, product)
            .pipe(take(1));
    }

    // USANDO APENAS OS DE CIMA

    getProductsMixed() {
        return this.http
            .get<any>(`${this.API}/.json`)
            .toPromise()
            .then((res) => res.data as Product[])
            .then((data) => data);
    }

    getProductsWithOrdersSmall() {
        return this.http
            .get<any>(this.API)
            .toPromise()
            .then((res) => res.data as Product[])
            .then((data) => data);
    }

    getProductsSmall() {
        return this.http
            .get<any>(this.API)
            .toPromise()
            .then((res) => res.data as Product[])
            .then((data) => data);
    }
}
