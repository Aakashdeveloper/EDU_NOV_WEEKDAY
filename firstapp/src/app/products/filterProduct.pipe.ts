import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product_model';

@Pipe({
    name: 'filtered'
})

export class FilterProduct implements PipeTransform {
    transform(value: IProduct[], filterBy: string) {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        return filterBy ? value.filter((product: IProduct) =>
            (product.productName.toLowerCase().indexOf(filterBy) !== -1)) : value;
    }
}



/*
function add(a,b){
    retrun a+b
}

(a,b) => {retrun a+b}

*/
