import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/formPoster.service';

@Component({
    selector: 'app-form',
    templateUrl: './custForm.component.html'
})

export class CustFormComponent {
    languages: any[] = ['AngularJs', 'NodeJs', 'ReactJs', 'GOLang'];
    model = new Employee('John' , 'andrew' , 'a@a.com', '12345678' , true, 'male', 'AngularJs');
    hasCodeLangError: Boolean = false;
    formdata: Employee;

    constructor(private _FormPosterService: FormPosterService) {}
    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }


    validateCodeLang(event): void {
        if (this.model.codelang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    submitForm(form: NgForm): void {
        // console.log(form.value);
        this.formdata = form.value;
        this._FormPosterService.postEmployee(form.value)
            .subscribe((data) => console.log('success', data));
    }
}



/*
ng-pristine ng-untouched   ng-valid
ng-dirty    ng-touched     ng-invalid
*/

