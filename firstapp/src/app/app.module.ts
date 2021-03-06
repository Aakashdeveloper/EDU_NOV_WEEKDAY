import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/Router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/notFouns.component';
import { OrderComponent } from './orders/order.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { MoviesService } from './movies/movies.services';
import { ProductModule } from './products/product.module';

@NgModule({
    // All module import or create
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: 'movies', component: MoviesComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent}
        ]),
        ProductModule

    ],

    // All component & pipe
    declarations: [
        AppComponent,
        NotFoundComponent,
        OrderComponent,
        MoviesComponent,
        HomeComponent,
    ],

    // only first component
    bootstrap: [
        AppComponent
    ],

    // All services
    providers: [
        MoviesService
    ]
})

export class AppModule {

}


