import { Component } from '@angular/core';
import { IProduct } from './product_model';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:purple}', 'h3{color:olive}']
    styleUrls: ['./product.component.css']
})


export class ProductComponent {
    title: String = '~~~~Product List~~~~';
    showImage: Boolean = false;
    filterText: String;
    imageWidth: Number = 100;
    products: IProduct[] = [
            {
                '_id': '5a05dacc734d1d68d42d31f3',
                'productId': 1,
                'productName': 'Leaf Rake',
                'productCode': 'GDN-0011',
                'releaseDate': 'March 19, 2016',
                'description': 'Leaf rake with 48-inch wooden handle.',
                'price': 19.95,
                'starRating': 3.0,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
            },
            {
                '_id': '5a05daec734d1d68d42d32ca',
                'productId': 2,
                'productName': 'Garden Cart',
                'productCode': 'GDN-0023',
                'releaseDate': 'March 18, 2016',
                'description': '15 gallon capacity rolling garden cart',
                'price': 32.99,
                'starRating': 4.2,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
            },
            {
                '_id': '5a05daec734d1d68d42d32ca',
                'productId': 2,
                'productName': 'Garden Cart',
                'productCode': 'GDN-0023',
                'releaseDate': 'March 18, 2016',
                'description': '15 gallon capacity rolling garden cart',
                'price': 32.99,
                'starRating': 2.2,
                'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
            }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}




/*

writing css in TS file
Spearte StyleSheet
InLine Css
Dynamic Css(controlling from TS file)
Conditional Css


One Way Binding
 -- Data Binding {{}}
 -- Property Binding []
 -- Event Binding ()
Two Way Binding [()]


String  ''
Number  1
Boolean true/false

var
let
const


for(i=0;i<10;i++){
    console.log(i)
}

*ngFor
*ngIf


[1,2,3,4]
["A","C"]

[1,2,"ds",true,23,"dv"]

*/
