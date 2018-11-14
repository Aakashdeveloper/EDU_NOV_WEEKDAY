import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { ProductComponent } from './products/product.component';

@NgModule({
    // All module import or create
    imports: [
        BrowserModule
    ],

    // All component & pipe
    declarations: [
        AppComponent,
        BookComponent,
        ProductComponent
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


