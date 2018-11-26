import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder,
         Validators, AbstractControl, ValidatorFn} from '@angular/forms';

import { Customer } from './forms';

function ratingRange(min: number, max: number): ValidatorFn {
    return(c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return{'range': true};
        }
            return null;
    };
}

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit  {
    customerForm: FormGroup;
    customer: Customer = new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName : ['John', [Validators.required, Validators.minLength(5)]],
            lastName: ['', [Validators.required, Validators.maxLength(5)]],
            email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
            phone: [],
            notification: 'email',
            rating: ['', ratingRange(1, 5)]
        });

        this.customerForm.get('notification').valueChanges
                        .subscribe((value) => this.setNotification(value));
    }


    popuplateData(): void {
        this.customerForm.patchValue({
            email: 'a@a.com'
        });
    }

    setNotification(notifVia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if (notifVia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }

        phoneControl.updateValueAndValidity();
    }

    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }

 }



 /*
 this.customerForm = new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl()
        });

      popuplateData(): void {
        this.customerForm.setValue({
            firstName: 'Ankit',
            lastName: 'Sharma',
            email: 'j@a'
        });
    }

  */

