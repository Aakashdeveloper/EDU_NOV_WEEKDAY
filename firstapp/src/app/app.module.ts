import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discountPrice.pipe';
import { FilterProduct } from './products/filterProduct.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
    // All module import or create
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule
    ],

    // All component & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        FilterProduct,
        StarComponent,
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All services
    providers: [
        ProductService
    ]
})

export class AppModule {

}


