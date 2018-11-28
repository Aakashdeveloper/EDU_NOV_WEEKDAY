import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder,
        Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { Customer } from './form.model';


function ratingRange(min: Number, max: Number) {
    return(c: AbstractControl): {[key: string]: boolean} | null => {
        if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
            return {'range': true};
        }
        return null;
    };
}

function emailMatcher(c: AbstractControl) {
    const emailControl = c.get('email');
    const confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return {'match': true};
}

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
             firstName : ['', [Validators.required, Validators.minLength(5)]],
             lastName: ['', [Validators.required, Validators.maxLength(5)]],
             emailGroup: this.fb.group({
                email:    ['',     [Validators.required, Validators.pattern('[0-9a-zA-Z]+@[a-zA-Z0-9]+')]],
                confirmEmail: ['', Validators.required],
            }, {validator: emailMatcher}),

             phone: [],
             notification: [],
             rating: ['', [ratingRange(1, 6)]]
         });
    }

    populateData(): void {
        this.customerForm.patchValue({
            firstName: 'John'
        });
    }

    save() {
        console.log(this.customerForm);
    }

    setNotification(notifyvia: string): void {
        const phoneControl = this.customerForm.get('phone');
        if (notifyvia === 'phone') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }

        phoneControl.updateValueAndValidity();
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

