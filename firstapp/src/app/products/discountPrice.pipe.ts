import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discountPipe'
})

export class DiscountPipe implements PipeTransform {
    transform(value: number, ratio: number) {
        value = value - ratio;
        return value;
    }
}
