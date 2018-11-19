import { Component, OnInit } from '@angular/core';
import { IProduct } from './product_model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:purple}', 'h3{color:olive}']
    styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
    title: String = '~~~~Product List~~~~';
    showImage: Boolean = false;
    filterText: String;
    imageWidth: Number = 100;
    products: IProduct[];

    constructor(private _productSerivce: ProductService) {}


    ngOnInit(): void {
       this._productSerivce.getProduct()
            .subscribe((data) => this.products = data);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecive(message: String): void {
        this.title = '~~~~Product List ~~~~~~ ' + message;
    }
}


/*
ngOnInit(): void {
       this._productSerivce.getProduct()
            .then((data) => this.products = data);
    }
*/
