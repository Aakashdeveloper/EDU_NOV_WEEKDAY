import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
    selector: 'app-form',
    templateUrl: './custForm.component.html'
})

export class CustFormComponent {
    languages: any[] = ['AngularJs', 'NodeJs', 'ReactJs', 'GOLang'];

    model = new Employee('John' , ' ' , true, '', 'AngularJs');

    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }

}
