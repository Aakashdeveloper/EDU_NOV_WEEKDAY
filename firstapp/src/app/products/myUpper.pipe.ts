import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myupper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: String, type: String) {
        if (type === 'upper') {
            value = value.toUpperCase();
        } else {
            value = value.toLowerCase();
        }
        return value;
    }
}



/*

function add(a,b){
    return a+b
}

var add = (a,b) => {
    return a+b
}

*/
