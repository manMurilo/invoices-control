import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '../api/customer';

@Injectable()
export class CrudService {
    private readonly API =
        'https://invoices-control-default-rtdb.firebaseio.com/provider.json';

    constructor(private http: HttpClient) {}

    list() {
        return this.http.get<Provider[]>(this.API);
    }
}
