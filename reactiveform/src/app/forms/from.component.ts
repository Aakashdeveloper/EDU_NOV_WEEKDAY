import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Customer } from './form.model';

@Component({
    selector: 'app-form',
    templateUrl: './forms.component.html'
})

export class FormComponent implements OnInit {

    customerForm: FormGroup;
    customer: Customer = new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
         this.customerForm = this.fb.group({
             firstName : ['Andy'],
             lastName: [],
             email: [],
             password: []
         });
    }

    populateData(): void {
        this.customerForm.patchValue({
            firstName: 'John'
        });
    }
}


/*

 ngOnInit(): void {
         this.customerForm = new FormGroup({
             firstName : new FormControl(),
             lastName: new FormControl()
         });
    }

    populateData(): void {
        this.customerForm.setValue({
            firstName: 'John'
        });
    }
*/

