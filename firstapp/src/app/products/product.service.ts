import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// Ang5
// import { Observable } from 'rxjs/observable';
// Ang6
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from './product_model';

@Injectable()


export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';
    private _moviesUrl =  'https://ngmovies.herokuapp.com/api/getMovies';

    constructor(private _http: Http,
                private __http: HttpClient) {}

    getProduct(): Observable<IProduct[]> {
        return this.__http.get<IProduct[]>(this._productUrl);
    }

    getMovies(): Observable<any[]> {
        return this.__http.get<any[]>(this._moviesUrl);
    }

}



/*
promises <= ===== .then
Observable => rxjs   ====== .subscribe  (fast)(stream line)

http=> old
httpclient => new


getProduct(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
              .toPromise()
              .then((res) => res.json());
    }

     private extractData(res: Response) {
        return res.json();
    }
getProduct(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .pipe(map(this.extractData));
    }
*/
