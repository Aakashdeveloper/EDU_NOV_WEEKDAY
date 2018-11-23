import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustFormComponent } from './customerForms/custForm.component';
import { FormPosterService } from './services/formPoster.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations : [
        AppComponent,
        CustFormComponent
    ],
    providers: [
        FormPosterService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
