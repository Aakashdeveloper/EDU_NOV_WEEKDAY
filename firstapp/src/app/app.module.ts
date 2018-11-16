import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discountPrice.pipe';
import { FilterProduct } from './products/filterProduct.pipe';

@NgModule({
    // All module import or create
    imports: [
        BrowserModule,
        FormsModule
    ],

    // All component & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        FilterProduct
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All services
    providers: []
})

export class AppModule {

}


