import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/Router';
import { IProduct } from './product_model';
import { ProductService } from './product.service';

@Component({
    templateUrl: './productDetail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._productService.getProductDetail(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['products']);
    }
}



/*

name: String;
    description: String;
    img: String;

this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.description = data['desc'];
                this.img = data['image'];
            });
*/
